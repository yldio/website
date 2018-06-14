import React from 'react';
import { shallow } from 'enzyme';
import Community from './index';

test('compositions/Home/WhatDoWeDo snapshot', () => {
  const wrapper = shallow(<WhatDoWeDo />);

  expect(wrapper).toMatchSnapshot();
});
