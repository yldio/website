import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

test('components/Button snapshot', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper).toMatchSnapshot();
});
