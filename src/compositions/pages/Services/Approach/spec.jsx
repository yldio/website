import React from 'react';
import { shallow } from 'enzyme';
import Challenges from './index';

test('compositions/pages/Services/Challenges snapshot', () => {
  const wrapper = shallow(<Challenges />);

  expect(wrapper).toMatchSnapshot();
});
