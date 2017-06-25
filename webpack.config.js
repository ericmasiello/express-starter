/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CSS_MODULE_PATTERN } = require('./webpack/config');

const orderPlugin = new webpack.optimize.OccurrenceOrderPlugin();
const hmrPlugin = new webpack.HotModuleReplacementPlugin();
const noEmitOnErrorPlugin = new webpack.NoEmitOnErrorsPlugin();
const productionEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});
const extractTextPluin = new ExtractTextWebpackPlugin('bundle.css');

const baseConfig = {
  devtool: 'source-map',
  context: path.join(process.cwd()),
  entry: {
    app: ['./src/client/index.js'],
  },
  output: {
    path: path.join(process.cwd(), './public/build'),
    filename: '[name].js',
  },
  plugins: [
    orderPlugin,
  ],
  module: {
    loaders: [
      {
        test: /\.(ttf|otf|eot|svg|woff2|jpg|gif|png?)(\?.+)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
};

const customConfig = {
  dev: {
    output: {
      publicPath: '/',
    },
    entry: {
      app: ['webpack-hot-middleware/client'],
    },
    plugins: [
      hmrPlugin,
      noEmitOnErrorPlugin,
    ],
    module: {
      loaders: [
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
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react-hmre'],
          },
        },
        {
          test: /\.(css|scss)$/,
          loaders: [
            'style-loader',
            `css-loader?modules=true&localIdentName=${CSS_MODULE_PATTERN}`,
            'postcss-loader',
            'sass-loader',
          ],
          include: path.resolve(__dirname, 'src'),
        },
      ],
    },
  },
  dist: {
    bail: true,
    output: {
      publicPath: '/build/',
    },
    plugins: [
      productionEnvPlugin,
      extractTextPluin,
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss)$/,
          loader: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: [
              `css-loader?modules=true&localIdentName=${CSS_MODULE_PATTERN}`,
              'postcss-loader',
              'sass-loader',
            ],
          }),
          include: path.resolve(__dirname, 'src'),
        },
      ],
    },
  },
};

module.exports = env => merge(baseConfig, customConfig[env]);
