import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import TileGrid, { Tile } from 'components/TileGrid';

import { TileContent, TileContentTitle, TileContentBody } from './styled';

const CaseStudies = () => (
  <PageSection paddingless data-selector="home:case-studies">
    <Grid fluid>
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
    </Grid>
  </PageSection>
);

export default CaseStudies;
