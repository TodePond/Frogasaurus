import { build } from "./build.js"

export const main = async (...args) => {

	const options = {
		build: "all",
	}

	for (let i = 0; i < args.length; i++) {
		const arg = args[i]
		if (arg === "--build" || arg === "-b") {
			const nextArg = args[i+1]
			options.build = nextArg
		}
	}

	const directory = Deno.cwd()
	const directoryParts = directory.split("\\")
	const projectName = directoryParts[directoryParts.length-1]

	await Deno.permissions.request({name: "read", path: "."})
	await Deno.permissions.request({name: "write", path: "."})

	await build(projectName, options)

	const watcher = Deno.watchFs("./source")
	for await (const event of watcher) {
		await build(projectName, options)
	}
}
