import React from 'react';
import { shallow } from 'enzyme';
import WeEnable from './index';

test('compositions/homepage/WeEnable snapshot', () => {
  const wrapper = shallow(<WeEnable />);

  expect(wrapper).toMatchSnapshot();
});
