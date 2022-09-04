export const trimStart = (string) => {
	for (let i = 0; i < string.length; i++) {
		const char = string[i]
		if (char === " " || char === "	") continue
		const trimmed = string.slice(i)
		const trimming = string.slice(0, i)
		return {trimmed, trimming}
	}
	return {trimmed: "", trimming: ""}
}

export const capitalise = (string) => {
	const [head, ...tail] = string.split("")
	return `${head.toUpperCase()}${tail.join("")}`
}