import React from 'react';
import { shallow } from 'enzyme';
import Community from './index';

test('compositions/Home/Community snapshot', () => {
  const wrapper = shallow(<Community />);

  expect(wrapper).toMatchSnapshot();
});
