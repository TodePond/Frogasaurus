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

//=========//
// EXPORTS //
//=========//
export const { greet } = DevelopmentFrogasaurus["./greet.js"]
export const { main } = DevelopmentFrogasaurus["./main.js"]

export const Development = {
	greet: DevelopmentFrogasaurus["./greet.js"].greet,
	main: DevelopmentFrogasaurus["./main.js"].main,
}