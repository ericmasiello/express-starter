module.exports = {
  extends: [
    'eslint-config-ericmasiello',
    'eslint-config-ericmasiello/flow',
    'eslint-config-ericmasiello/jest',
    'eslint-config-ericmasiello/react',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        './postcss.config.js',
        './webpack.config.js',
        './webpack/**/*.js',
        '**/*.test.js',
        'src/www/dev.js',
        'src/server/middleware/hot.js',
        'src/server/middleware/webpackDev.js',
        'src/server/util/routeMatch.js',
        'src/server/util/webpackDevBundler.js',
      ],
    }],
  },
};
