import React from 'react';
import { shallow } from 'enzyme';
import WorkWithUs from './index';

test('compositions/homepage/WorkWithUs snapshot', () => {
  const wrapper = shallow(<WorkWithUs />);

  expect(wrapper).toMatchSnapshot();
});
