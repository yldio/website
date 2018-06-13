import React from 'react';
import { shallow } from 'enzyme';
import AddCode from './index';

test('compositions/pages/Services/AddCode snapshot', () => {
  const wrapper = shallow(<AddCode />);

  expect(wrapper).toMatchSnapshot();
});
