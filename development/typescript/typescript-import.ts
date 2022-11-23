//=============//
// FROGASAURUS //
//=============//
const TypescriptFrogasaurus: any = {}

//========//
// SOURCE //
//========//
{
	//====== ./greet.ts ======
	{
		TypescriptFrogasaurus["./greet.ts"] = {}
		const HELLO: string = "Hello"
		
		const greet = (name: string) => {
			console.log(`${HELLO} ${name}!`)
		}
		

		TypescriptFrogasaurus["./greet.ts"].HELLO = HELLO
		TypescriptFrogasaurus["./greet.ts"].greet = greet
	}

	//====== ./main.ts ======
	{
		TypescriptFrogasaurus["./main.ts"] = {}
		
		const main = () => {
			greet('World')
		}

		TypescriptFrogasaurus["./main.ts"].main = main
	}

	const { greet } = TypescriptFrogasaurus["./greet.ts"]

}

//=========//
// EXPORTS //
//=========//
export const { HELLO, greet } = TypescriptFrogasaurus["./greet.ts"]
export const { main } = TypescriptFrogasaurus["./main.ts"]

export const Typescript = {
	HELLO: TypescriptFrogasaurus["./greet.ts"].HELLO,
	greet: TypescriptFrogasaurus["./greet.ts"].greet,
	main: TypescriptFrogasaurus["./main.ts"].main,
}