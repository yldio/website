import React from 'react';
import TileGrid, { Tile } from 'components/TileGrid';

import {
  Section,
  TileContent,
  TileContentTitle,
  TileContentBody,
  Image,
  Right,
  Left,
} from './styled';

import phoneImage from './phone-placeholder.svg';
import placeholder from './app-placeholder.svg';
import clientLogo from './trainline-logo.png';
import secondClientLogo from './joyent-logo.png';

const RelatedCaseStudies = () => (
  <Section wide>
    <TileGrid>
      <Tile>
        <TileContent>
          <Left>
            <header>
              <TileContentTitle>Related Case Studies</TileContentTitle>
              <img alt="client logo" src={clientLogo} />
            </header>
            <TileContentBody>
              A legacy platform that faced a huge pressure to have an updated
              interface.
            </TileContentBody>
          </Left>
          <Right>
            <Image src={phoneImage} />
          </Right>
        </TileContent>
      </Tile>
      <Tile colour="lightGreen">
        <TileContent>
          <Left>
            <header>
              <TileContentTitle>Related Case Studies</TileContentTitle>
              <img alt="client logo" src={secondClientLogo} />
            </header>
            <TileContentBody>
              A legacy platform that faced a huge pressure to have an updated
              interface.
            </TileContentBody>
          </Left>
          <Right>
            <Image src={placeholder} />
          </Right>
        </TileContent>
      </Tile>
    </TileGrid>
  </Section>
);

export default RelatedCaseStudies;
