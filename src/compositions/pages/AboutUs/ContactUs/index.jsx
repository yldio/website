import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import { H3, H4 } from 'components/Typography';

export default () => (
  <PageSection data-selector="services:help">
    <Grid>
      <Row>
        <Col xs={12}>
          <H3 decorated>Contact Us</H3>
        </Col>
      </Row>
      <H4>UK</H4>
      <H4>Portugal</H4>
    </Grid>
  </PageSection>
);
