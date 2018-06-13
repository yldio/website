import React from 'react';
import { shallow } from 'enzyme';
import Engineering from './index';

test('compositions/pages/Services/Engineering snapshot', () => {
  const wrapper = shallow(<Engineering />);

  expect(wrapper).toMatchSnapshot();
});
