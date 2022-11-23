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

//======//
// MAIN //
//======//
TypescriptFrogasaurus["./main.ts"].main(...Deno.args)