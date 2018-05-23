import React from 'react';
import { shallow } from 'enzyme';
import ServicesTiles from './index';

test('compositions/pages/Services/Tiles snapshot', () => {
  const wrapper = shallow(<ServicesTiles />);

  expect(wrapper).toMatchSnapshot();
});
