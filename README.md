# As of 17th August 2022, I'm currently redesigning + rewriting Frogasaurus. This readme might be incorrect.

<img align="right" height="100" src="http://todepond.com/IMG/Frogasaurus@0.25x.png">

# Frogasaurus
Frogasaurus is a script for bundling a javascript library into a single file.<br>
I made it because I wanted an easy way to make a library that can be used in either of these ways:
* Imported with the `import` keyword.
* Embedded with a `script` tag.

## How does it work?
Write your code inside the `source` folder.<br>
Then run the `frogasaurus.js` file with [Deno](https://deno.land).<br>

Your bundled project will appear!<br>
Use the `-import.js` file when importing the project.<br>
Use the `-embed.js` file when embedding the project.

## Anything else I should know?
Yes. But it's a secret!
