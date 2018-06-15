import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';

export default () => (
  <Section>
    <Padding top={30} bottom={50}>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <H3 decorated>Consultancy</H3>
          </Col>
          <Col xs={12} sm={6}>
            <Copy>
              We help you realise the full potential of your engineering and
              delivery capability.<br />
              <br />We use our capability model to help you gauge your
              organisation’s current maturity and help you identify any gaps and
              opportunities for improvement in line with your vision.<br />
              <br />We use our best practice models of discovery and delivery to
              drive success and ensure you have the right skills, processes and
              tools. What’s more we help you build the right framework to
              develop a long lasting engineering culture. We bring excellence,
              fast, and we ultimately save our clients millions of pounds in
              licensing fees.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
