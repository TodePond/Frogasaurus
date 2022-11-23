import { trimStart } from "./string.js"

export const getConstName = (line) => {
	for (let i = "const ".length; i < line.length; i++) {
		const char = line[i]
		if (char === " " || char === "	" || char === "=" || char === ":") {
			return line.slice("const ".length, i)
		}
	}
}

export const getImportNames = (line) => {
	const [head, tail] = line.split("{")
	const [inner] = tail.split("}")
	const names = inner.split(",").map(name => name.trim())
	return names
}

export const getImportPath = (line) => {
	const [head, tail] = line.split(" from ")
	const [start, path, end] = tail.split(`"`)
	return path
}

export const parseExport = (line, {fileName, lineNumber}) => {

	const trim = trimStart(line)
	const {trimmed, trimming} = trim
	const exportSnippet = trimmed.slice(0, "export ".length)
	if (exportSnippet !== "export ") return {success: false}
	
	const trimLength = line.length - trimmed.length
	const tail = line.slice("export ".length + trimLength)

	const constSnippet = tail.slice(0, "const ".length)
	if (constSnippet !== "const ") {
		console.log(`%cError: Sorry, Frogasaurus only supports exports when you write 'const' immediately after.\n%c${fileName}:${lineNumber}\n\n	${line}\n`, RED, "")
		return {success: false}
	}

	const name = getConstName(tail)
	return {
		success: true,
		name,
		margin: trimming,
		tail,
	}
}

export const parseImport = (line, {fileName, lineNumber}) => {
	const trim = trimStart(line)
	const {trimmed, trimming} = trim
	const importSnippet = trimmed.slice(0, "import ".length)
	if (importSnippet !== "import ") return {success: false}
	
	const trimLength = line.length - trimmed.length
	const tail = line.slice("import ".length + trimLength)

	const path = getImportPath(tail)
	const names = getImportNames(tail)
	const output = `{ ${names.join(", ")} }`

	return {
		success: true,
		names,
		path,
		output,
		margin: trimming,
		tail,
	}
}