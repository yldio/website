import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';

import { H3 } from 'components/typography';
import Hero from 'components/hero';

export default () => (
  <Hero>
    <Grid>
      <Padding top={172} bottom={32}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <H3 whiter>Our Approach</H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Grid>
  </Hero>
);
