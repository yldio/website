import React from 'react';

import Button from 'components/Button';
import Link from 'components/Link';
import PageSection from 'components/PageSection';
import TileGrid, { Tile } from 'components/TileGrid';
import { CallToAction } from './styled';

const CaseStudies = () => (
  <PageSection wide>
    <TileGrid>
      <Tile title="Trainline">
        A legacy platform that faced a huge pressure to have an updated
        interface.
      </Tile>
      <Tile colour="darker" title="The Economist">
        A legacy platform that faced a huge pressure to have an updated
        interface.
      </Tile>
      <Tile colour="dark" title="Joyent">
        A legacy platform that faced a huge pressure to have an updated
        interface.
      </Tile>
      <Tile title="DoctorLink">
        A legacy platform that faced a huge pressure to have an updated
        interface.
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
