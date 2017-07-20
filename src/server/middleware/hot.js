/* @flow */
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevBundler from '../util/webpackDevBundler';

const { bundler } = webpackDevBundler();

const middleware = webpackHotMiddleware(bundler, {
  log: console.log, // eslint-disable-line no-console
});

export default middleware;
