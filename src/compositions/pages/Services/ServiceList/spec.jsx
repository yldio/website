import React from 'react';
import { shallow } from 'enzyme';
import ServiceList from './index';

test('compositions/pages/Services/ServiceList snapshot', () => {
  const wrapper = shallow(<ServiceList />);

  expect(wrapper).toMatchSnapshot();
});
