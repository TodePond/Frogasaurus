//=============//
// FROGASAURUS //
//=============//
const JavascriptFrogasaurus = {}

//========//
// SOURCE //
//========//
{
	//====== ./greet.js ======
	{
		JavascriptFrogasaurus["./greet.js"] = {}
		const greet = (name) => {
			console.log(`Hello ${name}!`)
		}
		

		JavascriptFrogasaurus["./greet.js"].greet = greet
	}

	//====== ./main.js ======
	{
		JavascriptFrogasaurus["./main.js"] = {}
		
		const main = () => {
			greet('World')
		}

		JavascriptFrogasaurus["./main.js"].main = main
	}

	const { greet } = JavascriptFrogasaurus["./greet.js"]

}

//=========//
// EXPORTS //
//=========//
const Javascript = {
	greet: JavascriptFrogasaurus["./greet.js"].greet,
	main: JavascriptFrogasaurus["./main.js"].main,
}