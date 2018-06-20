import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3 } from 'components/typography';
import Checklist, { Item as CheckItem } from 'components/checklist';
import Section from 'components/section';

export default () => (
  <Section data-selector="what-do-we-enable">
    <Grid>
      <Margin top={{ xs: 15, md: 45 }} bottom={{ xs: 15, md: 45 }}>
        <Row>
          <Col xs={12}>
            <H3 decorated>What we enable you to do</H3>
          </Col>
          <Col xs={12}>
            <Checklist>
              <Row between="xs">
                <Col xs={12} md={6}>
                  <Padding right={{ xs: 0, md: 23 }}>
                    <CheckItem>
                      Transform, innovate and differentiate at speed
                    </CheckItem>
                    <CheckItem>
                      Adopt cutting edge technologies - We’re pioneers in JS,
                      Node.js, React and Design Systems
                    </CheckItem>
                    <CheckItem>
                      Build custom software solutions that become your asset
                    </CheckItem>
                  </Padding>
                </Col>
                <Col xs={12} md={6}>
                  <Padding right={{ xs: 0, md: 23 }}>
                    <CheckItem>
                      Grow capability inside your organisation - consulting,
                      training, pairing and education
                    </CheckItem>
                    <CheckItem>Grow a design & engineering culture</CheckItem>
                    <CheckItem>
                      Deliver the right user experience at the right time, on
                      the right channel
                    </CheckItem>
                  </Padding>
                </Col>
              </Row>
            </Checklist>
          </Col>
        </Row>
      </Margin>
    </Grid>
  </Section>
);
