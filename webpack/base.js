const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const orderPlugin = new webpack.optimize.OccurrenceOrderPlugin();
const htmlPlugin = new HtmlWebpackPlugin({
  template: `!!raw-loader!${path.join(process.cwd(), 'src/index.template.ejs')}`,
  filename: path.join(process.cwd(), 'views/index.ejs'),
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
  },
});

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
    htmlPlugin,
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

module.exports = baseConfig;
