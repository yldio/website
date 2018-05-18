import React from 'react';
import { shallow } from 'enzyme';
import ProductGrid from './index';

test('components/ProductGrid snapshot', () => {
  const wrapper = shallow(<ProductGrid />);

  expect(wrapper).toMatchSnapshot();
});
