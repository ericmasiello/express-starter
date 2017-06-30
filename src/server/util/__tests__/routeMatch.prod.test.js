import { match } from 'react-router';
import { renderToString } from 'react-dom/server';
import routeMatch, { routeMatchCallback } from '../routeMatch';
import logger from '../../logger';
import routes from '../../../client/routes';

jest.mock('../../logger');
jest.mock('react-router');
jest.mock('react');
jest.mock('react-dom/server');
jest.mock('../isprod', () => true);

const mockHtml = '<html></html>';
renderToString.mockImplementation(() => mockHtml);

describe('routeMatch', () => {
  it('should call match', () => {
    const requestMock = {
      url: 'http://www.mywebsite.com',
    };
    const responseMock = {};
    routeMatch(requestMock, responseMock);

    expect(match.mock.calls[0][0]).toEqual({
      routes,
      location: requestMock.url,
    });
  });
});

describe('routeMatchCallback', () => {
  it('should return a function', () => {
    const result = routeMatchCallback();
    expect(typeof result).toBe('function');
  });

  describe('returned function', () => {
    it('should return a 500 when passed an error', () => {
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const result = routeMatchCallback(mockResponse);
      const error = new Error('Some error');
      result(error);
      expect(logger.error).toBeCalledWith(error);
      expect(mockResponse.status).toBeCalledWith(500);
      expect(mockResponse.send).toBeCalledWith(error.message);
    });

    it('should redirect with a 302 when passed a redirect location', () => {
      const mockResponse = {
        redirect: jest.fn(),
      };
      const result = routeMatchCallback(mockResponse);
      const redirectionLocation = {
        pathname: 'thepathname',
        search: 'thesearch',
      };
      result(null, redirectionLocation);
      expect(mockResponse.redirect).toBeCalledWith(302, `${redirectionLocation.pathname}${redirectionLocation.search}`);
    });

    it('should render React component and send html response', () => {
      const mockResponse = {
        render: jest.fn(),
      };
      const result = routeMatchCallback(mockResponse);
      const renderProps = {
        some: 'props',
      };
      result(null, null, renderProps);
      expect(mockResponse.render).toBeCalledWith('index', {
        buildPath: '/build',
        html: mockHtml,
        isProd: true,
      });
    });

    it('should return a 404 in all other cases', () => {
      const mockResponse = {
        sendStatus: jest.fn(),
      };
      const result = routeMatchCallback(mockResponse);
      result();
      expect(mockResponse.sendStatus).toBeCalledWith(404);
    });
  });
});
