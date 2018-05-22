import React from 'react';
import { shallow } from 'enzyme';
import ServicesPage from './index';

test('compositions/pages/Services snapshot', () => {
  const wrapper = shallow(<ServicesPage />);

  expect(wrapper).toMatchSnapshot();
});
