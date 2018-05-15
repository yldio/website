import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

test('compositions/homepage/BuildBetter snapshot', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
