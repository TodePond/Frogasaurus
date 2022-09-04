import { build } from "./build.js"

export const main = async () => {
	const directory = Deno.cwd()
	const directoryParts = directory.split("\\")
	const projectName = directoryParts[directoryParts.length-1]

	await Deno.permissions.request({name: "read", path: "."})
	await Deno.permissions.request({name: "write", path: "."})

	await build(projectName)

	const watcher = Deno.watchFs("./source")
	for await (const event of watcher) {
		await build(projectName)
	}
}
