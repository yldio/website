import React from 'react';
import { shallow } from 'enzyme';
import BuildBetter from './index';

test('compositions/homepage/BuildBetter snapshot', () => {
  const wrapper = shallow(<BuildBetter />);

  expect(wrapper).toMatchSnapshot();
});
