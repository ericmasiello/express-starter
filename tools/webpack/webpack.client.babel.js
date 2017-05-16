const path = require('path');

module.exports = {
  name: 'client',
  devtool: 'hidden-source-map',
  context: path.join(process.cwd()),
  entry: {
    server: ['./src/client/index.js'],
  },
  output: {
    path: path.join(process.cwd(), './build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
