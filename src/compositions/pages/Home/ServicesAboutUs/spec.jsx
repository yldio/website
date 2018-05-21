import React from 'react';
import { shallow } from 'enzyme';
import ServicesAboutUs from './index';

test('compositions/homepage/ServicesAboutUs snapshot', () => {
  const wrapper = shallow(<ServicesAboutUs />);

  expect(wrapper).toMatchSnapshot();
});
