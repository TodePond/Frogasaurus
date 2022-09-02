//=============//
// FROGASAURUS //
//=============//
const FrogasaurusFrogasaurus = {}

//========//
// SOURCE //
//========//
{
	//====== ./greet.js ======
	{
		FrogasaurusFrogasaurus["./greet.js"] = {}
		const greet = (name) => console.log(`Hello ${name}!`)

		FrogasaurusFrogasaurus["./greet.js"].greet = greet
	}

	//====== ./hello.js ======
	{
		FrogasaurusFrogasaurus["./hello.js"] = {}
		
		const main = (name = "world") => {
			greet(name)
		}

		FrogasaurusFrogasaurus["./hello.js"].main = main
	}

	const { greet } = FrogasaurusFrogasaurus["./greet.js"]}

//=========//
// EXPORTS //
//=========//
const Frogasaurus = {
	greet: FrogasaurusFrogasaurus["./greet.js"].greet,
	main: FrogasaurusFrogasaurus["./hello.js"].main,
}