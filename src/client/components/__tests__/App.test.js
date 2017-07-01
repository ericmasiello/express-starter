import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('should render', () => {
  const component = renderer.create(
    <App>
      Hello World!
    </App>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
