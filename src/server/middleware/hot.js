/* @flow */
/* eslint-disable import/no-extraneous-dependencies */
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
/* eslint-enable import/no-extraneous-dependencies */
import configFactory from '../../../tools/webpack/webpack.client';

const config = configFactory('dev');
const bundler = webpack(config);

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
