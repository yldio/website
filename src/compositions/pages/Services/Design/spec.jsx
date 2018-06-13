import React from 'react';
import { shallow } from 'enzyme';
import Design from './index';

test('compositions/pages/Services/Design snapshot', () => {
  const wrapper = shallow(<Design />);

  expect(wrapper).toMatchSnapshot();
});
