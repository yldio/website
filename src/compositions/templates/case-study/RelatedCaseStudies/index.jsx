import React from 'react';
import TileGrid, { Tile } from 'components/TileGrid';

import {
  Section,
  TileContent,
  TileContentTitle,
  TileContentBody,
  Right,
  Left,
} from './styled';

const RelatedCaseStudies = () => (
  <Section wide>
    <TileGrid>
      <Tile>
        <TileContent>
          <Left>
            <TileContentTitle>Related Case Studies</TileContentTitle>
            <TileContentBody>
              A legacy platform that faced a huge pressure to have an updated
              interface.
            </TileContentBody>
          </Left>
          <Right>
            <p>test</p>
          </Right>
        </TileContent>
      </Tile>
      <Tile colour="lightGreen">
        <TileContent>
          <Left>
            <TileContentTitle>Related Case Studies</TileContentTitle>
            <TileContentBody>
              A legacy platform that faced a huge pressure to have an updated
              interface.
            </TileContentBody>
          </Left>
          <Right>
            <p>test</p>
          </Right>
        </TileContent>
      </Tile>
    </TileGrid>
  </Section>
);

export default RelatedCaseStudies;
