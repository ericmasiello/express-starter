const path = require('path');
const webpack = require('webpack');

const hmrPlugin = new webpack.HotModuleReplacementPlugin();
const noEmitOnErrorPlugin = new webpack.NoEmitOnErrorsPlugin();

const devConfig = {
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
          'postcss-loader',
          'sass-loader',
        ],
        include: path.resolve(process.cwd(), 'src'),
      },
    ],
  },
};

module.exports = devConfig;
