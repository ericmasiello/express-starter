/* @flow */
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import configFactory from '../../../webpack.config';

const config = configFactory('dev');
const bundler = webpack(config);

const middleware = webpackHotMiddleware(bundler, {
  log: console.log, // eslint-disable-line no-console
});

export default middleware;
