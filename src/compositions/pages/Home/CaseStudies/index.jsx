import React from 'react';

import Button from 'components/Button';
import Link from 'components/Link';
import PageSection from 'components/PageSection';
import TileGrid, { Tile } from 'components/TileGrid';

import {
  CallToAction,
  TileContent,
  TileContentTitle,
  TileContentBody,
} from './styled';

const CaseStudies = () => (
  <PageSection wide data-selector="home:case-studies">
    <TileGrid>
      <Tile>
        <TileContent>
          <TileContentTitle>Trainline</TileContentTitle>
          <TileContentBody>
            A legacy platform that faced a huge pressure to have an updated
            interface.
          </TileContentBody>
        </TileContent>
      </Tile>
      <Tile colour="darker">
        <TileContent>
          <TileContentTitle>The Economist</TileContentTitle>
          <TileContentBody>
            A legacy platform that faced a huge pressure to have an updated
            interface.
          </TileContentBody>
        </TileContent>
      </Tile>
      <Tile colour="dark">
        <TileContent>
          <TileContentTitle>Joyent</TileContentTitle>
          <TileContentBody>
            A legacy platform that faced a huge pressure to have an updated
            interface.
          </TileContentBody>
        </TileContent>
      </Tile>
      <Tile>
        <TileContent>
          <TileContentTitle>Doctor Link</TileContentTitle>
          <TileContentBody>
            A legacy platform that faced a huge pressure to have an updated
            interface.
          </TileContentBody>
        </TileContent>
      </Tile>
    </TileGrid>
    <CallToAction>
      <Button component={Link} href="/case-studies">
        View More
      </Button>
    </CallToAction>
  </PageSection>
);

export default CaseStudies;
