const path = require('path');

module.exports = {
  name: 'server',
  target: 'node',
  devtool: 'hidden-source-map',
  context: path.join(process.cwd()),
  entry: {
    server: ['./src/www/index.js'],
  },
  output: {
    path: path.join(process.cwd(), './build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  },
};
