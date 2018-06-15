import React from 'react';
import { shallow } from 'enzyme';
import Partners from './index';

test('compositions/pages/Services/Partners snapshot', () => {
  const wrapper = shallow(<Partners />);

  expect(wrapper).toMatchSnapshot();
});
