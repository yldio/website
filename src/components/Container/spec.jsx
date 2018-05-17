import React from 'react';
import { shallow } from 'enzyme';
import Container from './index';

test('components/Container snapshot', () => {
  const wrapper = shallow(<Container>Some content</Container>);

  expect(wrapper).toMatchSnapshot();
});

test('components/Container snapshot (wide)', () => {
  const wrapper = shallow(<Container wide>Some content</Container>);

  expect(wrapper).toMatchSnapshot();
});
