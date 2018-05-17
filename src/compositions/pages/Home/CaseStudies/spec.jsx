import React from 'react';
import { shallow } from 'enzyme';
import CaseStudies from './index';

test('compositions/homepage/CaseStudies snapshot', () => {
  const wrapper = shallow(<CaseStudies />);

  expect(wrapper).toMatchSnapshot();
});
