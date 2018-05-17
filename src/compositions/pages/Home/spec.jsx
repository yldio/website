import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './index';

test('compositions/homepage/Home snapshot', () => {
  const wrapper = shallow(<HomePage />);

  expect(wrapper).toMatchSnapshot();
});
