import app from '../app';

jest.mock('../middleware/hot', () => ({ default: jest.fn() }));

it('should be defined', () => {
  expect(app).toBeDefined();
});
