import React from 'react';
import { shallow } from 'enzyme';
import OurClients from './index';

test('compositions/pages/OurClients snapshot', () => {
  const wrapper = shallow(<OurClients />);

  expect(wrapper).toMatchSnapshot();
});
