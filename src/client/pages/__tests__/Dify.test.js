import React from 'react';
import renderer from 'react-test-renderer';
import Dify from '../Dify';

it('should render', () => {
  const component = renderer.create(
    <Dify />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
