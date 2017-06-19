/* eslint-disable import/no-extraneous-dependencies */
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
/* eslint-enable import/no-extraneous-dependencies */
import configFunc from '../../../tools/webpack/webpack.client.babel';

const config = configFunc('dev');

console.log('========= hot ========= ');
console.log('config = ', config);

const bundler = webpack(config);

// console.log('bundler = ', bundler);
console.log('filename = ', config.output.filename);
console.log('publicPath = ', config.output.publicPath);

const middleware = [
  webpackDevMiddleware(bundler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true,
    },
  }),
  webpackHotMiddleware(bundler, {
    log: console.log, // eslint-disable-line no-console
  }),
];

export default middleware;
