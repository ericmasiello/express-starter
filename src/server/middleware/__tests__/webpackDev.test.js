import webpackDevMiddleware from 'webpack-dev-middleware';
import '../webpackDev';

jest.mock('webpack-dev-middleware', () => jest.fn());

it('should call middleware', () => {
  expect(webpackDevMiddleware).toBeCalled();
});
