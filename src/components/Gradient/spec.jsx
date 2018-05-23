import React from 'react';
import { shallow } from 'enzyme';
import Gradient from './index';

test('snapshot', () => {
  const wrapper = shallow(<Gradient />);

  expect(wrapper).toMatchSnapshot();
});

test('applies height property', () => {
  const wrapper = shallow(<Gradient height="100px" />);

  expect(wrapper.prop('height')).toEqual('100px');
});
