import React from 'react';
import TileGrid, { Tile } from 'components/TileGrid';

import {
  Section,
  TileContent,
  TileContentTitle,
  TileContentBody,
} from './styled';

const ServicesTiles = () => (
  <Section wide>
    <TileGrid>
      <Tile>
        <TileContent>
          <TileContentTitle>About Us</TileContentTitle>
          <TileContentBody>
            We have team members from a broad spectrum of backgrounds and
            incredible technology companies.
          </TileContentBody>
        </TileContent>
      </Tile>
      <Tile colour="darker">
        <TileContent>
          <TileContentTitle>Case Studies</TileContentTitle>
          <TileContentBody>XXX</TileContentBody>
        </TileContent>
      </Tile>
    </TileGrid>
  </Section>
);

export default ServicesTiles;
