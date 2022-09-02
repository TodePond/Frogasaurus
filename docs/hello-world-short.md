 # Hello World Guide (short version)
This is a short guide on how to make your first library with Frogasaurus!<br>
A longer version is available [here](hello-world-long.md).

## Installing
Install Frogasaurus with [deno](https://deno.land) using this command:
```
deno install --allow-write=. --allow-read=. https://deno.land/x/frogasaurus/frogasaurus.js
```

## Writing the code
Write all your code in a folder named `source`.<br>

#### `Hello/source/hello.js`
```js
export const hello = () => {
  console.log("Hello world!")
}
```

## Building the library
Run this command in the project root folder.
```
frogasaurus
```

## Using the library
Frogasaurus builds two files
* `Hello/hello-embed.js`
* `Hello/hello-import.js`

Use the `embed` version like this:
#### `Hello/index.html`
```html
<script src="hello-embed.js"></script>
<script>
  const { hello } = Hello
  hello()
</script>
```

Use the `import` version like this:
#### `Hello/script.js`
```js
import { hello } from "./hello-import.js"
hello()
```

## Standalone
If you export a function called `main`, an extra file gets built:<br>
* `Hello/hello-standalone.js`

You can run the `main` function by running the file:<br>
```
deno run hello-standalone.js
```

Or... you could install it:<br>
```
deno install --name hello hello-standalone.js
```

Then, you can call the `main` function from the command line:
```
hello
```
