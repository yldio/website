import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import AboutUs from './index';

test('components/AboutUs snapshot', () => {
  const wrapper = shallow(<AboutUs />);

  expect(wrapper).toMatchSnapshot();
});
