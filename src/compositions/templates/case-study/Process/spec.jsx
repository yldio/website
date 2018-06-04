import React from 'react';
import { shallow } from 'enzyme';

import Process from './index';

test('success section', () => {
  const wrapper = shallow(<Process />);
  expect(wrapper).toMatchSnapshot();
});
