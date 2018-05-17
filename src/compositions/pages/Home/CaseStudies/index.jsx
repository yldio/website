import React from 'react';

// import Button from '../../../../components/Button';
import PageSection from '../../../../components/PageSection';
import TileGrid, { Tile } from '../../../../components/TileGrid';

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
  </PageSection>
);

export default CaseStudies;
