import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import hot from '../hot';

jest.mock('webpack-dev-middleware');
jest.mock('webpack-hot-middleware');

webpackDevMiddleware.mockImplementation(() => () => 'dev');
webpackHotMiddleware.mockImplementation(() => () => 'hot');

it('should create a a list of hot middleware', () => {
  expect(webpackDevMiddleware).toBeCalled();
  expect(webpackHotMiddleware).toBeCalled();
  expect(hot.length).toBe(2);
});
