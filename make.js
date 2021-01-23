
const decoder = new TextDecoder("utf-8")
const encoder = new TextEncoder("utf-8")

const readFile = async (path) => {
	console.log("Reading File: " + path)
	const data = await Deno.readFile(path)
	const source = decoder.decode(data)
	return source
}

const writeFile = async (path, source) => {
	console.log("Writing File: " + path)
	const data = encoder.encode(source)
	return await Deno.writeFile(path, data)
}

const readDir = async (path) => {
	const base = {
		header: [],
		middle: [],
		footer: [],
	}
	
	const module = {
		header: [],
		middle: [],
		footer: [],
	}
	
	for await (const entry of Deno.readDir(path)) {
		
		const entryPath = `${path}/${entry.name}`
		if (entry.isDirectory) await readDir(entryPath)
		else {
			const name = entry.name.split(".")[0]
			const args = name.split("-").slice(1)
			
			const target = args.includes("module")? module : base
			const position = args.includes("footer")? "footer" : (args.includes("header")? "header" : "middle")
			
			const source = await readFile(entryPath)
			target[position].push(source)
		}
	}
	return {base, module}
}

const {base, module} = await readDir("source")

const baseSource = base.header.join("\n") + base.middle.join("\n") + base.footer.join("\n")
const moduleSource = module.header.join("\n") + baseSource + module.middle.join("\n") + module.footer.join("\n")

await writeFile("build/build.js", baseSource)
await writeFile("build/build-module.js", moduleSource)
