/* @flow */
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import configFactory from '../../../webpack.config';

const config = configFactory('dev');
const bundler = webpack(config);

const middleware = webpackDevMiddleware(bundler, {
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
});

export default middleware;
