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

## Flags
You can give flags to your source files, so that Frogasaurus knows what to do with them.<br>
For example, a file named `greet.js` has no flags.<br>
You can name it `greet-import.js` instead, to give it the `import` flag.<br>
Files can have multiple flags. For example, `greet-footer-import.js` has the `footer` and `import` flags.

These are the different flags you can use:
| Flag     | Description                                                    |
|----------|----------------------------------------------------------------|
| `header` | The code in this file is placed at the start.                  |
| `footer` | The code in this file is placed at the end.                    |
| `import` | The code in this file is only inserted into `build-import.js`. |
| `embed`  | The code in this file is only inserted into `build-embed.js`.  |

## Commands
By the way, you can use this command to run the `make.js` file:
```
deno run frogasaurus.js
```

Or you can install it to your command line like this:
```
deno install frogasaurus.js
``` 

Then you can use it anywhere like this (remember - it looks for a folder called `source`):
```
frogasaurus
```
