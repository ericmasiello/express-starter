import { main, health } from '../uiController';
import routeMatch from '../../util/routeMatch';

jest.mock('../../util/routeMatch');

describe('main', () => {
  it('should be defined', () => {
    expect(main).toBeDefined();
  });

  describe('index route', () => {
    it('should call the routeMatch module', () => {
      const requestMock = {};
      const responseMock = {};
      main(requestMock, responseMock);
      expect(routeMatch).toBeCalledWith(requestMock, responseMock);
    });
  });
});

describe('main', () => {
  it('should be defined', () => {
    expect(health).toBeDefined();
  });

  it('should send response as json', () => {
    const requestMock = {};
    const responseMock = {
      json: jest.fn(),
    };
    health(requestMock, responseMock);
    expect(responseMock.json.mock.calls[0][0]).toEqual({
      status: 'ok',
    });
  });
});
