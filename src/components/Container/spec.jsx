import React from 'react';
import { shallow } from 'enzyme';
import Container from './index';

test('components/Container snapshot', () => {
  const wrapper = shallow(<Container />);

  expect(wrapper).toMatchSnapshot();
});
