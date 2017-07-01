import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Home from '../Home';

it('should render', () => {
  const component = renderer.create(
    <Home />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should update the counter', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('button').text()).toEqual('Click to verify client side scripting: 0');
  wrapper.find('button').simulate('click');
  expect(wrapper.find('button').text()).toEqual('Click to verify client side scripting: 1');
});
