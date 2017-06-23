import { renderToString } from 'react-dom/server';
import { routeMatchCallback } from '../routeMatch';

jest.mock('../../logger');
jest.mock('react-router');
jest.mock('react');
jest.mock('react-dom/server');
jest.mock('../isprod', () => true);

const mockHtml = '<html></html>';
renderToString.mockImplementation(() => mockHtml);

describe('routeMatchCallback', () => {
  describe('returned function', () => {
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
      });
    });
  });
});
