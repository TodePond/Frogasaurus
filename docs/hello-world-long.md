# Hello World Guide (long version)
This is a long-winded guide on how to make your first library with Frogasaurus!<br>
A shorter version is *coming soon-ish*.

## Installing
Before you start, you might need to install [deno](https://deno.land) (if you haven't already).

Then, you can install Frogasaurus with this command:
```
deno install --allow-write=. --allow-read=. https://deno.land/x/frogasaurus/frogasaurus.js
```

By the way, the `allow-read=.` and `allow-write=.` parts mean that you are allowing Frogasaurus to read and write in the folder that you use it.

## Writing the code
Let's make a library for a function that prints "Hello world!"<br>

First, let's make a folder for our project.<br>
You can call the folder whatever you want.<br>
I'm going to call it `Hello`.<br>

And let's make a folder for all our code.<br>
It needs to be called `source`.<br>

Now, let's make our first javascript file.<br>
You can call the file whatever you want.<br>
I'm going to call it `hello.js`.

#### `Hello/source/hello.js`
```js
```

And in that file... Let's write some code in an exported function!
#### `Hello/source/hello.js`
```js
export const hello = () => {
  console.log("Hello world!")
}
```

## Building the library
To build the library, run Frogasaurus in your terminal with this command:
```
frogasaurus
```

After doing that, you should notice that two files have appeared in your folder!
* `Hello/hello-embed.js`
* `Hello/hello-import.js`

Each file is a different version of your library.<br>
Each version can be used in a different way.<br>

## Using the library (embed)
To use the `embed` version... place it in some script tags, and call the `hello` function like this...

#### `Hello/index.html`
```html
<script src="hello-embed.js"></script>
<script>

  const { hello } = Hello
  hello() //"Hello world!"
  
</script>
```
You could open `index.html` in a web browser to run it.

## Using the library (import)
To use the `import` version... import it like this:

#### `Hello/script.js`
```js
import { hello } from "./hello-import.js`
hello()
```

You could run `script.js` with this command:
```
deno run script.js
```

Or you could use the library from within a module:
#### `Hello/index.html`
```html
<script type="module" src="hello-import.js"></script>
<script type="module">
	
	import { hello } from "./hello-import.js"
	hello()
	
</script>
```

But you would need to run a local server to be able to open `index.html` in a web-browser.<br>
I recommend installing `file_server` with this command:
```
deno install --allow-read --allow-net https://deno.land/std@0.142.0/http/file_server.ts
```

Then you can run a local server with this command:
```
file_server
```

## Standalone
But wait, there's more!

If you export a function called `main`, something special happens!<br>
Let's change our code to this:
#### `Hello/source/hello.js`
```js
export const main = () => {
  console.log("Hello world!")
}
```

Wow! An extra file gets generated!
* `Hello/hello-standalone.js`

You can run the `main` function with this command:<br>
```
deno run hello-standalone.js
```

Or... you could rename the `standalone` file to something convenient, like `hello.js`...<br>
And then install it with this command:
```
deno install hello.js
```

This lets you use your library from the command line:
```
hello
```
