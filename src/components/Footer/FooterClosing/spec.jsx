import React from 'react';
import { shallow } from 'enzyme';
import FooterClosing from './index';

test('components/FooterClosing snapshot', () => {
  const wrapper = shallow(<FooterClosing />);

  expect(wrapper).toMatchSnapshot();
});
