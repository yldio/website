import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

test('components/Header snapshot', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
