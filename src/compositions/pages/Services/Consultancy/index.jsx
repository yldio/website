import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import PageSection from 'components/PageSection';
import { H2, Copy } from 'components/Typography';

export default () => (
  <PageSection data-selector="home:community">
    <Grid data-selector="home:community">
      <Row>
        <Col xs={12} sm={6}>
          <H2 decorated>Consultancy</H2>
        </Col>
        <Col xs={12} sm={6}>
          <Copy>
            We help you realise the full potential of your engineering and
            delivery capability.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy>
            We use our capability model to help you gauge your organisation’s
            current maturity and help you identify any gaps and opportunities
            for improvement in line with your vision.
          </Copy>
          <Copy>
            <br />
          </Copy>
          <Copy>
            We use our best practice models of discovery and delivery to drive
            success and ensure you have the right skills, processes and tools.
            What’s more we help you build the right framework to develop a long
            lasting engineering culture. We bring excellence, fast, and we
            ultimately save our clients millions of pounds in licensing fees.
          </Copy>
        </Col>
      </Row>
    </Grid>
  </PageSection>
);
