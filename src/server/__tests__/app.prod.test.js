import app from '../app';

jest.mock('../middleware/hot', () => jest.fn());
jest.mock('../util/isprod', () => true);

it('should be defined when running in a development environment', () => {
  expect(app).toBeDefined();
});
