> Note: This is an experiment that needs to be vetted

# What is this for?

_There's dozens of Node + React starter projects. Why should you use this one to start your next project?_

Building Node apps that leverage all support all the amazing features allowed by tooling like Babel and Webpack is a bit more complicated than it ought to be. The goal of this project is to define a simple starter package that:

- Allows developers to leverage unsupported language features through Babel on both client + server
- Requires minimal configuration
- Supports isomorphic/universal rendering with React
- Is prebaked with full test coverage and linting for both JavaScript and (S)CSS
- Prescribes a sensible folder structure without over-prescribing tooling
- Is easily debuggable using tools like Visual Studio Code

## Getting Started
The first thing you'll need to do is create an environment file.

```
cp dev.env .env
```
Then update the contents of `.env` with the appropriate values. Here's an example:

```
PORT=3000
MORGAN_CONFIG=dev
APP_NAME='my-cool-starter-app'
LOG_LEVEL=debug
```

This project is meant to run on node 8.1.4+ and npm 5.3.0+. Once you've verified you're running the correct version of node and npm, simply run:

```
npm install
```

## npm scripts

### Running the app

#### `npm run dev`
This script is intended for day-to-day development. It should not be used to run the application in any production environment. The script simply uses a custom entry point (`src/www/dev.js`) that uses `babel-register` hook to transpile the application via Babel and launch it from the entry point (`src/www/index.js`). The babel configuration is hosted inside the file `.babelrc`**.

For logging, this app uses the `bunyan`* library. `bunyan`'s logs are great for machines and provide a wealth of information. However, they are a bit difficult to parse by humans. Therefore, when running the `dev` script, the app pipes everything through the bunyan CLI (`src/client src/www/dev.js | bunyan`), translating the `bunyan` logs into human readable form. Because this project uses `webpack-dev-middleware`, there's no need to run a separate script for bundling your client app. Server-side changes will automaticaly restart the server (via `nodemon`) and client-side changes are handled via Webpack and hot module replacement.

**Note:** While running in `dev` mode, the application will not utilize isomorphic/universal rendering. Therefore is is recommended you test your application locally in production mode by running `npm run start`.

#### `npm start`
This is the production-friendly way to run the app. This script uses babel to pre-transpile the server-side code that can be run natively by node. The server code is output to `build/`. The `prebuild:server` npm script is responsible for emptying the contents of the `build` directory before transpiling the server code. This script also sets `NODE_ENV=production`. By setting the value to production, the application will utilize isomorphic/universal rendering and disable and hot module replacement.

### Testing & Static Analysis
#### `npm test`
This application utilizes both Jest and Enzyme for testing. Jest is the test runner and can manage the majority of the tests you'll need to write. Enzyme should only be used for specific testing requirements of React components. The coverage threshold is cofigured in package.json (`coverageThreshold`) and is currently set to 100% across the board. Feel free to reduce these values if you find them to be too high for your needs.

#### Static Analysis

### `npm run lint`
This tool uses `eslint` and extends several base configurations form `eslint-config-ericmasiello`. You can modify these rules inside `.eslintrc.js`.

### `npm run lint:style`
This tool `stylelint` and extends the base configuration of `stylelint-config-ericmasiello`. You can modify these rules inside `.stylelintrc.js`.

#### `npm run flow`
Flow adds static type checking support to JavaScript. In order to enable Flow on a particular JavaScript module, you'll need to add the `/* @flow */` comment header.  

If you do not wish to use Flow, it is recommended you make the following modifications:

1. Remove `/* @flow */` from all JavaScript files
2. Remove both `flow` and `flow:update` scripts from `package.json`
3. Remove `flow` from the `validate` script inside `package.json`
4. Remove `eslint-config-ericmasiello/flow` from `.eslintrc.js`
4. Run:`npm uninstall babel-plugin-transform-flow-strip-types eslint-plugin-flowtype flow-bin flow-typed`

### Git prepush hook
Husky allows you to easily configure scripts to be run before pushing or committing to your git repository. As such, this app is configured with a `prepush` script inside `package.json`. This script runs `npm run validate` which in turn runs all the testing and static analysis scripts. If all the tests pass, the code will push. 

While this is not recommended, if you absolutely need to push without validation, simply run `git push --no-verify`.


## Debugging with Visual Studio Code

If you are using [Visual Studio Code](https://code.visualstudio.com/), you can enable debugging by creating the following `launch.json` file inside a directory `.vscode` within your project.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Server",
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "program": "${workspaceRoot}/src/www/dev.js",
      "stopOnEntry": false,
      "args": [],
      "cwd": "${workspaceRoot}",
      "preLaunchTask": null,
      "runtimeArgs": [
        "--nolazy"
      ],
      "env": {
        "NODE_ENV": "development"
      },
      "console": "internalConsole",
      "sourceMaps": true,
      "outFiles": []
    }
  ]
}
```
Using VS Code's debugger, run the configuration titled Launch Server. This will start your app similar to running `npm run dev`. However, there are two key differences: (1) you're able to set breakpoints in the server environment within the VS Code editor and (2) the app will no longer be running via `nodemon` meaning any server-side changes will require you to manually bounce the server.


* \* `bunyan` logs will not appear in the Visual Studio Code's *Debug Console* if running the app via VS Code's debugger. You'll need to run `npm start` or `npm run dev` to see the `bunyon` logs appear in your terminal window.
* \*\* This babel configuration can be written as pure JSON and saved as `.babelrc` or it can be saved (and linted) via JavaScript if saved as `.babelrc.js`. Ordinarily, I would opt for the latter option. Unfortunately, Visual Studio Code doesn't seem to honor the configuration when saved as `.babelrc.js`. If you know how to fix this, please submit a pull request 😁
