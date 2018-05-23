import React from 'react';
import { shallow } from 'enzyme';
import WorkWithUs from './index';

test('compositions/WorkWithUs snapshot', () => {
  const wrapper = shallow(<WorkWithUs />);

  expect(wrapper).toMatchSnapshot();
});
