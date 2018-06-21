import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';

import { Copy } from 'components/typography';
import Section from 'components/section';

export default () => (
  <Section>
    <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
      <Grid>
        <Row>
          <Col xs={12} md={6} />
          <Col xs={12} md={6}>
            <Copy>
              YLD brings together a team of many different people — engineers,
              designers and creative thinkers — who come together to help our
              clients achieve their goals. Our experience stems from our team
              holding roles at companies including Canonical, Apple, Yahoo,
              Microsoft, and IBM.<br />
              <br />The sole focus is to create gardens — by advising our
              clients on open source technology choices years ahead of time and
              working together with them to create capabilities to support
              continued innovation.<br />
              <br />We have worked for some of the largest multinational
              enterprise companies, private clients and for government agencies
              across B2B and B2C environments. We believe our diversity makes us
              a stronger team, which helps us better serve our clients and our
              communities.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
