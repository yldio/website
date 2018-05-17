import React from 'react';
import { shallow } from 'enzyme';
import Tile from './index';

test('components/TileGrid/Tile snapshot', () => {
  const wrapper = shallow(
    <Tile title="Hello, world">This is some example content.</Tile>,
  );

  expect(wrapper).toMatchSnapshot();
});
