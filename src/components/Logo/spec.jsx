import React from 'react';
import { shallow } from 'enzyme';
import Logo from './index';

test('components/Logo snapshot', () => {
  const wrapper = shallow(<Logo />);

  expect(wrapper).toMatchSnapshot();
});
