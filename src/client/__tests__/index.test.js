import { render } from 'react-dom';

jest.mock('react-dom');

const mockRender = jest.fn();

render.mockImplementation(mockRender);

it('should call render', () => {
  expect(render).toBeCalled();
});
