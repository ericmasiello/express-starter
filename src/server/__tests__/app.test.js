import app from '../app';

jest.mock('../middleware/hot', () => jest.fn());

it('should be defined', () => {
  expect(app).toBeDefined();
});
