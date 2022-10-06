<img align="right" height="100" src="http://todepond.com/IMG/Frogasaurus@0.25x.png">

# Frogasaurus
Frogasaurus is a script for bundling a standalone javascript library into a single file.<br>
I made it because I wanted an easy way to make a library that can be used in any of these ways:
* Imported with the `import` keyword.
* Embedded with a `script` tag.
* Run in a terminal with `deno run`.

I don't intend for anyone to use Frogasaurus other than me...<br>
But you're welcome to have-a-look or try-it if you'd like!

## How does it work?
Write your code inside the `source` folder.<br>
Then use the `frogasaurus` command in the root folder.

Your bundled project will appear!<br>
Use the `-import.js` file when importing the project.<br>
Use the `-embed.js` file when embedding the project.

If you export a function called `main`...<br>
An extra `-standalone.js` file will appear, that you can run in the command line with [deno](https://deno.land).<br>

## How do I install it?
Run this command using [deno](https://deno.land/):
```
deno install --allow-write=. --allow-read=. https://deno.land/x/frogasaurus/frogasaurus.js
```

## What? I don't understand?
Check out the [Hello World Guide](docs/hello-world.md) (or other [guides](docs/guides.md)).

## How do I build it?
If you want to use Frogasaurus, you don't need to build it - just [install it](#how-do-i-install-it).<br>
But if you want to develop Frogasaurus, you need to know this:

Frogasaurus is built with Frogasaurus.<br>
So, if you're developing Frogasaurus, write your code in the `source` folder.<br>
And then run this command to build it:

```
frogasaurus --build standalone
```

## Anything else I should know?
Yes! There are many limitations and problems! But it's a secret.
