import React from 'react';
import { shallow } from 'enzyme';
import PageRule from './index';

test('components/PageRule snapshot', () => {
  const wrapper = shallow(<PageRule />);

  expect(wrapper).toMatchSnapshot();
});
