import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';
import Button from 'components/button';

export default () => (
  <Section dark>
    <Grid height="368">
      <Padding top={{ xs: 15, md: 56 }} bottom={{ xs: 15, md: 70 }} inline>
        <Row middle="xs" between="xs">
          <Col xs={12}>
            <Margin bottom={12}>
              <H3 whiter decorated>
                Tech Talks YLD
              </H3>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
            <Copy white>
              Tech Talks YLD #TTY is the ultimate channel for talks from YLD run
              events and YLDers speaking at other conferences.
            </Copy>
          </Col>
          <Col xs={12} md={4}>
            <Row center="xs">
              <Col xs={12}>
                <Margin top={{ xs: 15 }}>
                  <Button transparent white to="/">
                    Find out More
                  </Button>
                </Margin>
              </Col>
            </Row>
          </Col>
        </Row>
      </Padding>
    </Grid>
  </Section>
);
