import { BLUE, RED, GREEN, YELLOW } from "./colour.js"

export const readFile = async (path) => {
	console.log(`%cReading File: ${path}`, BLUE)
	const source = await Deno.readTextFile(path)
	return source
}

export const writeFile = async (path, source) => {
	console.log(`%cWriting File: ${path}`, GREEN)
	return await Deno.writeTextFile(path, source)
}

let languageMode = undefined
export const getLanguageMode = () => languageMode

export const readDirectory = async (path) => {
	
	const entries = []

	for await (const entry of Deno.readDir(path)) {

		const {name} = entry
		const entryPath = `${path}/${name}`
		
		// Go deeper if it's a directory
		if (entry.isDirectory) {
			entries.push(...await readDirectory(entryPath))
			continue
		}

		// Make sure it's a javascript file
		const [head, extension] = name.split(".")
		if (extension !== "js" && extension !== "ts") continue

		if (languageMode === undefined) languageMode = extension
		else if (languageMode !== extension) throw new Error("Cannot mix javascript and typescript files")

		const source = await readFile(entryPath)
		entries.push({source, name, path: "./" + entryPath.slice("source/".length)})

	}

	return entries
}
