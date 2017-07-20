/* @flow */
import webpack from 'webpack';
import configFactory from '../../../webpack.config';

let config;
let bundler;

export default function createWebpackBundler() {
  if (!config) {
    config = configFactory('dev');
    bundler = webpack(config);
  }

  return {
    config,
    bundler,
  };
}
