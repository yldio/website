import React from 'react';
import { shallow } from 'enzyme';
import FooterNavigation from './index';

test('components/FooterNavigation snapshot', () => {
  const wrapper = shallow(<FooterNavigation />);

  expect(wrapper).toMatchSnapshot();
});
