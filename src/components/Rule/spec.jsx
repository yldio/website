import React from 'react';
import { shallow } from 'enzyme';
import Rule from './index';

test('components/Rule snapshot', () => {
  const wrapper = shallow(<Rule />);

  expect(wrapper).toMatchSnapshot();
});
