import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import PageSection from 'components/PageSection';
import { H4, Copy } from 'components/Typography';
import Button from 'components/Button';

const Section = styled(PageSection)`
  background-color: #5e5cb2;
`;

export default () => (
  <Section data-selector="home:community">
    <Grid>
      <Row>
        <Col xs={12}>
          <H4 lighter>Join Us</H4>
          <Copy>
            <br />
          </Copy>
        </Col>
        <Col xs={12} sm={8}>
          <Copy lighter>
            If you share a similar vision, or a passion for design, software
            engineering and open source, we would love to hear from you.
          </Copy>
        </Col>
        <Col xs={12} sm={4}>
          <Row center="xs">
            <Col xs={12}>
              <Button transparent>View openings</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </Section>
);
