import { capitalise } from "./string.js"
import { readDirectory, writeFile } from "./file.js"
import { parseExport, parseImport } from "./parse.js"
import { RED, YELLOW } from "./colour.js"

const HEADER_TITLE_LINES = [
	`//=============//`,
	`// FROGASAURUS //`,
	`//=============//`,
	``,
]
const SOURCE_TITLE_LINES = [
	``,
	`//========//`,
	`// SOURCE //`,
	`//========//`,
	``,
]

const FOOTER_TITLE_LINES = [
	``,
	``,
	`//=========//`,
	`// EXPORTS //`,
	`//=========//`,
	``,
]

const MAIN_TITLE_LINES = [
	``,
	``,
	`//======//`,
	`// MAIN //`,
	`//======//`,
	``,
]

const HEADER_TITLE = HEADER_TITLE_LINES.join("\n")
const SOURCE_TITLE = SOURCE_TITLE_LINES.join("\n")
const FOOTER_TITLE = FOOTER_TITLE_LINES.join("\n")
const MAIN_TITLE = MAIN_TITLE_LINES.join("\n")

const transpileSource = (source, name, path, projectName) => {

	const fileConstantName = `${capitalise(projectName)}Frogasaurus`
	const lines = source.split("\n")

	const strippedLines = []
	const exportResults = []
	const importResults = []

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]

		const metadata = {fileName: name, lineNumber: i}
		const exportResult = parseExport(line, metadata)
		if (exportResult.success) {
			strippedLines.push(`\t${exportResult.margin}${exportResult.tail}`)
			exportResults.push(exportResult)
			continue
		}
		
		const importResult = parseImport(line, metadata)
		if (importResult.success) {
			importResults.push(importResult)
			continue
		}

		strippedLines.push(`\t${line}`)
	}

	const exportLines = []
	for (const exportResult of exportResults) {
		exportLines.push(`\t\t${fileConstantName}["${path}"].${exportResult.name} = ${exportResult.name}`)
	}
	const exportSource = exportLines.join("\n")
	const innerSource = `\t\t${fileConstantName}["${path}"] = {}\n\t${strippedLines.join("\n\t")}\n\n${exportSource}`
	const scopedSource = `\t//====== ${path} ======\n\t{\n${innerSource}\n\t}`

	return {success: true, output: scopedSource, exportResults, importResults, path}
}

export const build = async (projectName, options) => {

	console.clear()
	
	const fileConstantName = `${capitalise(projectName)}Frogasaurus`
	
	const entries = await readDirectory("source")
	const sourceResults = entries.map(entry => transpileSource(entry.source, entry.name, entry.path, projectName))
	if (sourceResults.some(result => !result.success)) {
		console.log("%cFailed build", RED)
		return
	}

	// Check for duplicate export names
	const exportNames = new Set()
	for (const result of sourceResults) {
		for (const exportResult of result.exportResults) {
			if (exportNames.has(exportResult.name)) {
				console.log("%cSorry, you can't have multiple exports with the same name", RED)
				console.log("%cThis is because Frogasaurus mashes all your exports together <3", RED)
				console.log(`${result.path}`)
				console.log(`\n\t${exportResult.name}\n`)
				console.log("%cFailed build", RED)
				return
			}
			exportNames.add(exportResult.name)
		}
	}

	// Check for 'main' function export
	let mainFuncDenoSource = ""
	for (const result of sourceResults) {
		for (const exportResult of result.exportResults) {
			if (exportResult.name === "main") {
				mainFuncDenoSource = `${MAIN_TITLE}${fileConstantName}["${result.path}"].main(...Deno.args)`
			}
		}
	}

	const exportFooterLines = sourceResults.map(result => `export const { ${result.exportResults.map(exportResult => exportResult.name).join(", ")} } = ${fileConstantName}["${result.path}"]`)
	const exportFooterSource = exportFooterLines.join("\n")

	const globalFooterLines = [
		`const ${capitalise(projectName)} = {`,
	]

	for (const sourceResult of sourceResults) {
		for (const exportResult of sourceResult.exportResults) {
			globalFooterLines.push(`\t${exportResult.name}: ${fileConstantName}["${sourceResult.path}"].${exportResult.name},`)
		}
	}

	globalFooterLines.push(`}`)
	const globalFooterSource = globalFooterLines.join("\n")

	const importLists = new Map()
	for (const sourceResult of sourceResults) {

		for (const importResult of sourceResult.importResults) {
			if (importLists.get(importResult.path) === undefined) {
				importLists.set(importResult.path, new Set())
			}

			const importList = importLists.get(importResult.path)
			for (const name of importResult.names) {
				importList.add(name)
			}
		}
	}

	const importFooterLines = []
	for (const [path, importList] of importLists.entries()) {
		importFooterLines.push(`\tconst { ${[...importList.values()].join(", ")} } = ${fileConstantName}["${path}"]`)
	}
	const importFooterSource = "\n\n" + importFooterLines.join("\n")

	const transpiledSource = "{\n" + sourceResults.map(result => result.output).join("\n\n") + importFooterSource + "\n\n}"

	const headerLine = `const ${fileConstantName} = {}\n`

	const importSource = HEADER_TITLE + headerLine + SOURCE_TITLE + transpiledSource + FOOTER_TITLE + exportFooterSource + "\n\nexport " + globalFooterSource
	const embedSource = HEADER_TITLE + headerLine + SOURCE_TITLE + transpiledSource + FOOTER_TITLE + globalFooterSource
	const standaloneSource = HEADER_TITLE + headerLine + SOURCE_TITLE + transpiledSource + mainFuncDenoSource

	if (options.build === "all") {
		await writeFile(`${projectName.toLowerCase()}-import.js`, importSource)
		await writeFile(`${projectName.toLowerCase()}-embed.js`, embedSource)
		if (mainFuncDenoSource !== "") await writeFile(`${projectName.toLowerCase()}-standalone.js`, standaloneSource)
	} else if (options.build === "import") {
		await writeFile(`${projectName.toLowerCase()}.js`, importSource)
	} else if (options.build === "embed") {
		await writeFile(`${projectName.toLowerCase()}.js`, embedSource)
	} else if (options.build === "standalone") {
		if (mainFuncDenoSource === "") {
			console.log(`%cCan't build 'standalone' project, because no exported 'main' function was found :(`, RED)
		}
		await writeFile(`${projectName.toLowerCase()}.js`, standaloneSource)
	}

	console.log("%cFinished build!", YELLOW)
	console.log("Waiting for file changes...")
}