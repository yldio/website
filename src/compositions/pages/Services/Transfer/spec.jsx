import React from 'react';
import { shallow } from 'enzyme';
import Transfer from './index';

test('compositions/pages/Services/Transfer snapshot', () => {
  const wrapper = shallow(<Transfer />);

  expect(wrapper).toMatchSnapshot();
});
