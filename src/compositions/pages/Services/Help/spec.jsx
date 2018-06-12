import React from 'react';
import { shallow } from 'enzyme';
import Help from './index';

test('compositions/pages/Services/Help snapshot', () => {
  const wrapper = shallow(<Help />);

  expect(wrapper).toMatchSnapshot();
});
