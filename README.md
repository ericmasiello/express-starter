## Debugging with Visual Studio Code

If you are using [Visual Studio Code](https://code.visualstudio.com/), you can enable debugging by creating the following `launch.json` file inside a directory `.vscode` within your project.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "type": "node2",
      "request": "launch",
      "program": "${workspaceRoot}/www/index.js",
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