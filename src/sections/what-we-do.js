import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';

export default () => (
  <Section>
    <Grid>
      <Row center="xs" around="xs" top="xs">
        <Col xs={12} sm={12} md={4}>
          <Margin top={{ xs: 11, md: -39 }} inline>
            <Card title="Technology" height="255" width="100%">
              <Copy>
                Driving innovation through digital transformation to build
                relentlessly relevant companies
              </Copy>
            </Card>
          </Margin>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Margin top={{ xs: 11, md: -39 }} inline>
            <Card title="Culture" height="255" width="100%">
              <Copy>
                Creating enduring cultures of engineering & design innovation
              </Copy>
            </Card>
          </Margin>
        </Col>
        <Col xs={12} sm={12} md={4}>
          <Margin top={{ xs: 11, md: -39 }} inline>
            <Card title="Training" height="255" width="100%">
              <Copy>
                Originators who train your talent through skills transfer and
                pair programming
              </Copy>
            </Card>
          </Margin>
        </Col>
      </Row>
      <Margin top={{ xs: 15, sm: 48 }} bottom={{ xs: 15, sm: 50 }} inline>
        <Row>
          <Col xs={12} md={6}>
            <H3 decorated>What do we do</H3>
          </Col>
          <Col xs={12} md={6}>
            <Copy>
              We help companies ignite radical technology innovation and through
              digital transformation, build the most relentlessly relevant
              brands.<br />
              <br />Comfortable with digital change, we know how to create a
              lasting engineering culture of experimentation, to make sure our
              clients are too.​<br />
              <br />We thrive in enabling our clients to unlock the potential of
              their talent through up-skilling and pair programming, empowering
              them to stay ahead of the competition and improve their bottom
              line.
            </Copy>
          </Col>
        </Row>
      </Margin>
    </Grid>
  </Section>
);
