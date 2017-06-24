/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const orderPlugin = new webpack.optimize.OccurrenceOrderPlugin();
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  comments: false,
  dropDebugger: true,
  dropConsole: true,
  compressor: {
    warnings: false,
  },
});
const hmrPlugin = new webpack.HotModuleReplacementPlugin();
const noEmitOnErrorPlugin = new webpack.NoEmitOnErrorsPlugin();
const devEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    WEBPACK: true,
  },
});
const productionEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    WEBPACK: true,
  },
});

const baseConfig = {
  devtool: 'hidden-source-map',
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
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};

const customConfig = {
  dev: {
    devtool: 'eval',
    entry: {
      app: ['webpack-hot-middleware/client'],
    },
    plugins: [
      hmrPlugin,
      noEmitOnErrorPlugin,
      devEnvPlugin,
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
      ],
    },
  },
  dist: {
    bail: true,
    devtool: 'source-map',
    output: {
      publicPath: '/build/',
    },
    plugins: [
      uglifyPlugin,
      productionEnvPlugin,
    ],
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }],
    },
  },
};

module.exports = env => merge(baseConfig, customConfig[env]);
