import React from 'react';
import { shallow } from 'enzyme';
import CheckList from './index';

test('components/CheckList snapshot', () => {
  const wrapper = shallow(<CheckList />);

  expect(wrapper).toMatchSnapshot();
});
