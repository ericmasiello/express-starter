import { stub } from '../apiController';

describe('main', () => {
  it('should be defined', () => {
    expect(stub).toBeDefined();
  });

  it('should send response as json', () => {
    const requestMock = {};
    const responseMock = {
      json: jest.fn(),
    };
    stub(requestMock, responseMock);
    expect(responseMock.json.mock.calls[0][0]).toEqual({
      replace: 'me',
    });
  });
});
