<img align="right" height="100" src="http://todepond.com/IMG/Frogasaurus@0.25x.png">

# Frogasaurus
Frogasaurus is a script for bundling a javascript library into a single file.<br>
I made it because I wanted an easy way to make a library that can be used in any of these ways:
* Imported with the `import` keyword.
* Embedded with a `script` tag.
* Run in a terminal with `deno run`.

## How does it work?
Write your code inside the `source` folder.<br>
Then run `frogasaurus.js` with [deno](https://deno.land).

Your bundled project will appear!<br>
Use the `-import.js` file when importing the project.<br>
Use the `-embed.js` file when embedding the project.

If you export a function called `main`...<br>
An extra `-standalone.js` file will appear, that you can run in the command line with [deno](https://deno.land).<br>

## What? I don't understand?
Check out the [Hello World Guide](docs/hello-world-long.md).

## Anything else I should know?
Yes! There are some limitations! But it's all a secret (for now).
