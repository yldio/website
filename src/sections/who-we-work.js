import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import { Padding, Margin } from 'styled-components-spacing';

import { H3 } from 'components/typography';
import Section from 'components/section';

const Logo = ({ img }) => (
  <Col xs={12} md={6} lg={3}>
    <Margin bottom={{ xs: 15, md: 24 }}>
      <Flex justifyCenter alignCenter>
        <FlexItem>
          <img src={img} />
        </FlexItem>
      </Flex>
    </Margin>
  </Col>
);

export default ({ logos }) => (
  <Section data-selector="who-we-work-with">
    <Padding top={{ xs: 15, md: 41 }} bottom={{ xs: 15, md: 30 }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={55}>
              <H3 center decorated>
                Who we work with
              </H3>
            </Margin>
          </Col>
        </Row>
        <Row middle="xs" between="xs">
          {logos.map(({ ...logo }) => (
            <Logo
              key={`${logo.node.clientName}-logo`}
              img={logo.node.logoImage.file.url}
            />
          ))}
        </Row>
      </Grid>
    </Padding>
  </Section>
);
