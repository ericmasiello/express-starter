const merge = require('webpack-merge');

const baseConfig = require('./webpack/base');
const devConfig = require('./webpack/dev');
const distConfig = require('./webpack/dist');

const envConfig = {
  dev: devConfig,
  dist: distConfig,
};

module.exports = env => merge(baseConfig, envConfig[env]);
