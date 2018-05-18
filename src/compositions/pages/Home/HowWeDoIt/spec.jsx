import React from 'react';
import { shallow } from 'enzyme';
import HowWeDoIt from './index';

test('compositions/homepage/HowWeDoIt snapshot', () => {
  const wrapper = shallow(<HowWeDoIt />);

  expect(wrapper).toMatchSnapshot();
});
