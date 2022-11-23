//=============//
// FROGASAURUS //
//=============//
const DevelopmentFrogasaurus = {}

//========//
// SOURCE //
//========//
{
	//====== ./greet.js ======
	{
		DevelopmentFrogasaurus["./greet.js"] = {}
		const greet = (name) => {
			console.log(`Hello ${name}!`)
		}
		

		DevelopmentFrogasaurus["./greet.js"].greet = greet
	}

	//====== ./main.js ======
	{
		DevelopmentFrogasaurus["./main.js"] = {}
		
		const main = () => {
			greet('World')
		}

		DevelopmentFrogasaurus["./main.js"].main = main
	}

	const { greet } = DevelopmentFrogasaurus["undefined"]

}

//======//
// MAIN //
//======//
DevelopmentFrogasaurus["./main.js"].main(...Deno.args)