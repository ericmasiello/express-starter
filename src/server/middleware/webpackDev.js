/* @flow */
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackDevBundler from '../util/webpackDevBundler';

const { config, bundler } = webpackDevBundler();

const middleware = webpackDevMiddleware(bundler, {
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
});

export default middleware;
