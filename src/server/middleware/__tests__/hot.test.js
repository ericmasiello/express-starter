import webpackHotMiddleware from 'webpack-hot-middleware';
import '../hot';

jest.mock('webpack-hot-middleware', () => jest.fn());

it('should call middleware', () => {
  expect(webpackHotMiddleware).toBeCalled();
});
