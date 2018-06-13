import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import { H4 } from 'components/Typography';
import Divider from '../Divider';

export default () => (
  <Divider>
    <PageSection data-selector="home:community">
      <Grid data-selector="home:community">
        <Row center="xs">
          <Col xs={12} sm={9}>
            <H4 lighter decorated center>
              Sometimes doing the unexpected. Helping you to disrupt, mitigate
              risks and successfully reinvent.
            </H4>
          </Col>
        </Row>
      </Grid>
    </PageSection>
  </Divider>
);
