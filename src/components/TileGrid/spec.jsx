import React from 'react';
import { shallow } from 'enzyme';
import TileGrid, { Tile } from './index';

test('components/TileGrid snapshot with tiles', () => {
  const wrapper = shallow(
    <TileGrid>
      <Tile colour="normal">Hello</Tile>
      <Tile colour="dark">World</Tile>
      <Tile colour="darker">!</Tile>
    </TileGrid>
  );

  expect(wrapper).toMatchSnapshot();
});
