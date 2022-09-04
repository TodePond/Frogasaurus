# Frogasaurus Arguments Guide
Frogasaurus has some options you can choose from.

For example, you can choose to keep watching for any file-changes with the `--watch` argument:
```
frogasaurus --watch
```

And you can choose to build just one of the three files.<br>
This just builds the `-standalone.js` file (not `embed` or `import`):
```
frogasaurus --build standalone
```

Here are all the different arguments:
| Argument | Options | Description |
|--|--|--|
| `--watch` | None | Frogasaurus stays running - and rebuilds when something changes in the `source` folder. |
| `--build` | `all` `import` `embed` `standalone` | Frogasaurus tries to build all three files, or just a single file. |
