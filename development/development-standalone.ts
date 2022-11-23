//=============//
// FROGASAURUS //
//=============//
const DevelopmentFrogasaurus: any = {}

//========//
// SOURCE //
//========//
{
	//====== ./greet.ts ======
	{
		DevelopmentFrogasaurus["./greet.ts"] = {}
		const greet = (name: string) => {
			console.log(`Hello ${name}!`)
		}
		

		DevelopmentFrogasaurus["./greet.ts"].greet = greet
	}

	//====== ./main.ts ======
	{
		DevelopmentFrogasaurus["./main.ts"] = {}
		
		const main = () => {
			greet('World')
		}

		DevelopmentFrogasaurus["./main.ts"].main = main
	}

	const { greet } = DevelopmentFrogasaurus["./greet.ts"]

}

//======//
// MAIN //
//======//
DevelopmentFrogasaurus["./main.ts"].main(...Deno.args)