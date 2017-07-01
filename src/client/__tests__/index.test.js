import { render } from 'react-dom';
import '../index';

jest.mock('react-dom');

const mockRender = jest.fn();

render.mockImplementation(mockRender);

it('should call render', () => {
  expect(render).toBeCalled();
});
