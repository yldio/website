import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3, H4 } from 'components/typography';
import Section from 'components/section';

export default () => (
  <Section>
    <Padding top={{ xs: 15, sm: 32 }} bottom={{ xs: 15, sm: 65 }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={30}>
              <H3 decorated>Contact Us</H3>
            </Margin>
          </Col>
          <Col xs={12}>
            <Margin bottom={15}>
              <H4>UK</H4>
            </Margin>
          </Col>
          <Col xs={12}>
            <Margin bottom={15}>
              <H4>Portugal</H4>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
