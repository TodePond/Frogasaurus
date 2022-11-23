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
		const greet = (name: string) => {
			console.log(`Hello ${name}!`)
		}
		

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
const Typescript = {
	greet: TypescriptFrogasaurus["./greet.ts"].greet,
	main: TypescriptFrogasaurus["./main.ts"].main,
}