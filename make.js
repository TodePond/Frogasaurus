
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
	
	const paths = {
		header: [],
		middle: [],
		footer: [],
	}
	
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
			if (target === base) paths[position].push(entryPath)
		}
	}
	return {base, module, paths}
}

const {base, module, paths} = await readDir("source")

const baseSource = base.header.join("\n") + "\n\n" + base.middle.join("\n") + "\n\n" + base.footer.join("\n")
const moduleSource = module.header.join("\n") + "\n\n" + baseSource + "\n\n" + module.middle.join("\n") + "\n\n" + module.footer.join("\n")

await writeFile("build/build.js", baseSource)
await writeFile("build/build-module.js", moduleSource)

const exampleTags = [...paths.header, ...paths.middle, ...paths.footer].map(path => `<script src="../${path}"></script>`)
const exampleSource = `<!-- This file shows you how you can use the library without building anything. -->
<!-- It is auto-generated by make.js -->
<!-- It's useful for when I want to test out changes without needing to build. -->
${exampleTags.join("\n")}
<script src="develop-script.js"></script>`

await writeFile("examples/develop.html", exampleSource)
