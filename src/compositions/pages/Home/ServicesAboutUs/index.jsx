import React from 'react';
import TileGrid, { Tile } from 'components/TileGrid';

import {
  Section,
  TileContent,
  TileContentTitle,
  TileContentBody,
} from './styled';

const ServicesAboutUs = () => (
  <Section wide data-selector="home:services-about-us">
    <TileGrid>
      <Tile>
        <TileContent>
          <TileContentTitle>Services</TileContentTitle>
          <TileContentBody>
            We enable your organisation to deliver world-class technology and
            user experiences, long after we leave.
          </TileContentBody>
        </TileContent>
      </Tile>
      <Tile colour="darker">
        <TileContent>
          <TileContentTitle>About Us</TileContentTitle>
          <TileContentBody>
            We have team members from a broad spectrum of backgrounds and
            incredible technology companies.
          </TileContentBody>
        </TileContent>
      </Tile>
    </TileGrid>
  </Section>
);

export default ServicesAboutUs;
