const webpack = require('webpack');

const extractBundles = bundles => ({
  plugins: bundles.map(bundle => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
});

module.exports = {
  extractBundles,
};
