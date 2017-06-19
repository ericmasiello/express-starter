/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import merge from 'webpack-merge';
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

const uglify = new webpack.optimize.UglifyJsPlugin({
  comments: false,
  dropDebugger: true,
  dropConsole: true,
  compressor: {
    warnings: false,
  },
});
const hmr = new webpack.HotModuleReplacementPlugin();
const noEmitOnError = new webpack.NoEmitOnErrorsPlugin();
const productionEnv = new webpack.DefinePlugin({
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

const customConfig = {
  dev: {
    devtool: 'eval',
    entry: ['webpack-hot-middleware/client'],
    plugins: [
      hmr,
      noEmitOnError,
    ],
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre'],
        },
      }],
    },
  },
  dist: {
    plugins: [
      uglify,
      productionEnv,
    ],
  },
};

export default env => merge(baseConfig, customConfig[env]);
