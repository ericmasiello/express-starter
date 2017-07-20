import { match } from 'react-router';
import { renderToString } from 'react-dom/server';
import routeMatch from '../routeMatch';

jest.mock('../../logger');
jest.mock('react-router');
jest.mock('react');
jest.mock('react-dom/server');

const mockHtml = '<html></html>';
renderToString.mockImplementation(() => mockHtml);

describe('routeMatch', () => {
  it('should not call match', () => {
    const requestMock = {
      url: 'http://www.mywebsite.com',
    };
    const responseMock = {
      render: jest.fn(),
    };
    routeMatch(requestMock, responseMock);

    expect(match).not.toBeCalled();

    expect(responseMock.render).toBeCalledWith('index.dev.ejs', {
      html: '',
      isProd: false,
    });
  });
});
