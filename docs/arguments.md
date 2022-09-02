# Arguments Guide
Standalone frogasaurus libraries can take arguments.<br>

# Single Argument
Let's make a library that says hello to a given name.

#### `Greeter/source/greet.js`
```js
export const main = (name) => {
  console.log(`Hello ${name}!`)
}
```

Then, let's build it by using the usual command.
```
frogasaurus
```

Our library is built! Let's install it to our command line!
```
deno install --name greet greeter-standalone.js
```

Now, we can use our library with arguments in the command line to say hello to different people.

This prints "Hello Lu!"
```
greet Lu
```

This prints "Hello world!"
```
greet world
```

## Multiple Arguments
Multiple arguments work the same way.<br>
Let's make a library that adds two numbers together

#### `Adder/source/add.js`
```js
export const main = (a, b) => {
  return parseInt(a) + parseInt(b)
}
```

After following the same steps to install it, we can do something like this:
```
add 3 2
```
