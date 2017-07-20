const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const { CSS_MODULE_PATTERN } = require('./config');
const { extractBundles } = require('./helpers');

const productionEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});
const extractTextPluin = new ExtractTextWebpackPlugin('bundle.[hash].css');

const distConfig = merge({
  bail: true,
  output: {
    publicPath: '/build/',
    filename: '[name].[hash].js',
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
        include: path.resolve(process.cwd(), 'src'),
      },
    ],
  },
}, extractBundles([
  {
    name: 'vendor',
    minChunks: ({ resource }) => (
      resource &&
      resource.indexOf('node_modules') >= 0 &&
      resource.match(/\.js$/)
    ),
  },
]),
);

module.exports = distConfig;
