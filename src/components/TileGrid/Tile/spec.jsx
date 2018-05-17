import React from 'react';
import { shallow } from 'enzyme';
import Tile from './index';

test('components/TileGrid/Tile snapshot', () => {
  const wrapper = shallow(<Tile />);

  expect(wrapper).toMatchSnapshot();
});
