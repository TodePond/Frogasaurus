# Options

Frogasaurus has some options you can choose from.<br>

| Argument  | Options                             | Description                                                                                                                                            |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--watch` | None                                | Frogasaurus stays running - and rebuilds when something changes in the `source` folder.                                                                |
| `--build` | `all` `import` `embed` `standalone` | Frogasaurus tries to build all three files, or just a single file. If it builds a single file, it doesn't have the usual name ending. (default: `all`) |

For example:

```
frogasaurus --build standalone
```

```
frogasaurus --watch
```
