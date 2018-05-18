import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './index';

test('components/ProductList snapshot', () => {
  const wrapper = shallow(<ProductList />);

  expect(wrapper).toMatchSnapshot();
});
