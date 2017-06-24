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
const productionEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
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
  ],
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
          test: /\.css/,
          loader: 'style-loader!css-loader',
          include: path.resolve(__dirname, 'src'),
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
      new ExtractTextPlugin('bundle.css'),
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
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
  },
};

module.exports = env => merge(baseConfig, customConfig[env]);
