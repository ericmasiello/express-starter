import createWebpackBundler from '../webpackDevBundler';

it('should create a config and bundler', () => {
  const { config, bundler } = createWebpackBundler();

  expect(config).toBeDefined();
  expect(bundler).toBeDefined();
});

it('should be treated as a singleton', () => {
  const { config, bundler } = createWebpackBundler();
  const { config: config2, bundler: bundler2 } = createWebpackBundler();

  expect(config).toBe(config2);
  expect(bundler).toBe(bundler2);
});
