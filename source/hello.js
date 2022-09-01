import { greet } from "./greet.js";

export const main = (name = "world") => {
	greet(name)
}