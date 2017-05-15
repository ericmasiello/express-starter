import { main, health } from '../uiController';

describe('main', () => {
  it('should be defined', () => {
    expect(main).toBeDefined();
  });

  it('should send response as json', () => {
    const requestMock = {};
    const responseMock = {
      send: jest.fn(),
    };
    main(requestMock, responseMock);
    expect(responseMock.send.mock.calls[0][0]).toEqual('Okay!');
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
