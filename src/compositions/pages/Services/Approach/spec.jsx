import React from 'react';
import { shallow } from 'enzyme';
import Approaches from './index';

test('compositions/pages/Services/Approaches snapshot', () => {
  const wrapper = shallow(<Approaches />);

  expect(wrapper).toMatchSnapshot();
});
