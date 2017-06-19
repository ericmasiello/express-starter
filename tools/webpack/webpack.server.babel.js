/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

const envPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});

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
  plugins: [
    envPlugin,
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: true,
    __dirname: true,
  },
};
