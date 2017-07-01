import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../Detail';

it('should render', () => {
  const props = {
    params: {
      id: '123',
    },
  };

  const component = renderer.create(
    <Detail {...props} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
