export const greet = (name) => console.log(`Hello ${name}!`)

export const main = (name = "world") => {
	greet(name)
}