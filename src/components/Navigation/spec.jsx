import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index';

test('components/Navigation snapshot', () => {
  const wrapper = shallow(<Navigation />);

  expect(wrapper).toMatchSnapshot();
});
