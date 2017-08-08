import React from 'react';
import renderer from 'react-test-renderer';
import Tower from '../Tower';

it('should render', () => {
  const component = renderer.create(
    <Tower />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
