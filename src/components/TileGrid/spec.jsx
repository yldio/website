import React from 'react';
import { shallow } from 'enzyme';
import TileGrid from './index';

test('components/TileGrid snapshot', () => {
  const wrapper = shallow(<TileGrid />);

  expect(wrapper).toMatchSnapshot();
});
