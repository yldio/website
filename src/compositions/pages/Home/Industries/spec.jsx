import React from 'react';
import { shallow } from 'enzyme';
import Industries from './index';

test('compositions/homepage/Industries snapshot', () => {
  const wrapper = shallow(<Industries />);

  expect(wrapper).toMatchSnapshot();
});
