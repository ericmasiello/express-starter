import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from '../NotFound';

it('should render', () => {
  const component = renderer.create(
    <NotFound />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
