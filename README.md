# What is this for?

Building Node apps that leverage all support all the amazing features allowed by tooling like Babel and Webpack is a bit more complicated than it ought to be. The goal of this project is to define a simple starter package that:

- Allows developers to leverage unsupported language features through Babel
- Requires minimal configuration
- Prescribes a sensible folder structure without over-prescribing excessive tooling
- Is easily debuggable using tools like Visual Studio Code

## npm scripts

### `start`
This script is intended for day-to-day development. It should not be used to run the application in any production environment. The script simply uses `babel-node` to transpile our application and launch it from the entry point located `src/www/index.js`. The babel configuration is hosted inside the file `.babelrc`.

For logging, we use the `bunyan` library. `bunyan`'s logs are great for machines and provide a wealth of information. However, they are a bit difficult to parse for humans. Therefore, in development, we pipe everything through the bunyan CLI (`babel-node src/www/index.js | bunyan`) which translates the bunyan logs into something more easily understood by humans. 

**Note** `bunyan` logs will not appear in the Visual Studio Code's *Debug Console* if running the app VS Code's debugger. You'll need to run `yarn start` to see the `bunyon` logs appear in your terminal window.

### `build`
This script uses Webpack to bundle the server code into a production-ready bundle that can be run natively by node without requiring any additional transpilation. The output of the bundled server code is output to `build/server.js`. The `prebuild` npm script is responsible for emptying the contents of the `build` directory before bundling the server code.

## A note on `.babelrc`

This babel configuration can be written as pure JSON and saved as `.babelrc` or it can be saved (and linted) via JavaScript if saved as `.babelrc.js`. Ordinarily, I would prefer the latter option, however, Visual Studio Code doesn't seem to honor the configuration when saved as `.babelrc.js`. 


## Debugging with Visual Studio Code

If you are using [Visual Studio Code](https://code.visualstudio.com/), you can enable debugging by creating the following `launch.json` file inside a directory `.vscode` within your project.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "program": "${workspaceRoot}/src/www/index.js",
      "stopOnEntry": false,
      "args": [],
      "cwd": "${workspaceRoot}",
      "preLaunchTask": null,
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "runtimeArgs": [
        "--nolazy"
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "internalConsole",
      "sourceMaps": true,
      "outFiles": []
    },
    {
      "name": "Attach",
      "type": "node",
      "request": "attach",
      "port": 5858,
      "address": "localhost",
      "restart": false,
      "sourceMaps": true,
      "outFiles": [],
      "localRoot": "${workspaceRoot}",
      "remoteRoot": null
    }
  ]
}
```