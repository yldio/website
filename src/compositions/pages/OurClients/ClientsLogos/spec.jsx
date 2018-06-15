import React from 'react';
import { shallow } from 'enzyme';
import ClientsLogos from './index';

test('compositions/pages/OurClients/ClientsLogos snapshot', () => {
  const wrapper = shallow(<ClientsLogos />);

  expect(wrapper).toMatchSnapshot();
});
