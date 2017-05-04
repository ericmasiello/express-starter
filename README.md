# What is this for?

Building Node apps that leverage all support all the amazing features allowed by tooling like Babel and Webpack is a bit more complicated than it ought to be. The goal of this project is to define a simple starter package that:

- Allows developers to leverage unsupported language features through Babel
- Requires minimal configuration
- Prescribes a sensible folder structure without over-prescribing excessive tooling
- Is debuggable using tools like Visual Studio Code 

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