import { main, health } from '../uiController';

// mock the routeMatch module
jest.mock('../../util/routeMatch', () => {
  return () => {
    return {
      isMocked: true,
    };
  };
});

describe('main', () => {
  it('should be defined', () => {
    expect(main).toBeDefined();
  });

  describe('index route', () => {
    it('should call the routeMatch module', () => {
      const requestMock = {};
      const responseMock = {};

      const result = main(requestMock, responseMock);
      expect(result.isMocked).toEqual(true);
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
