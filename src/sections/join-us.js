import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H4, Copy } from 'components/typography';
import Section from 'components/section';
import Button from 'components/button';

export default () => (
  <Section blue>
    <Grid>
      <Padding top={{ xs: 15, md: 35 }} bottom={{ xs: 15, md: 35 }} inline>
        <Row middle="xs" between="xs">
          <Col xs={12}>
            <Margin bottom={12}>
              <H4 whiter>Join Us</H4>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
            <Copy whiter>
              If you share a similar vision, or a passion for design, software
              engineering and open source, we would love to hear from you.
            </Copy>
          </Col>
          <Col xs={12} md={4}>
            <Row center="xs">
              <Col xs={12}>
                <Margin top={{ xs: 15, md: 0 }}>
                  <Button transparent white to="https://jobs.lever.co/yld">
                    View openings
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
