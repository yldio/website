import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { Copy, H5 } from 'components/typography';
import Section from 'components/section';
import { RevenueGrowth, Grow, X2, Crown } from 'components/icons';

const Wrapper = styled(Flex)`
  align-items: center;
  text-align: center;

  ${breakpoint('md')`
    align-items: flex-start;
    text-align: initial;
  `};
`;

export default () => (
  <Section data-selector="stats">
    <Padding top={{ xs: 25, md: 36 }} bottom={{ xs: 15, md: 36 }}>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Wrapper column contentStretch justifyBetween full>
              <Padding bottom={{ xs: 20 }}>
                <FlexItem>
                  <RevenueGrowth />
                  <H5 darker>Year on year revenue growth</H5>
                </FlexItem>
              </Padding>
              <Padding bottom={{ xs: 20 }}>
                <FlexItem>
                  <Grow />
                  <H5 darker>
                    One of the fastest growing <br /> companies in the UK
                  </H5>
                </FlexItem>
              </Padding>
              <Padding bottom={{ xs: 20 }}>
                <FlexItem>
                  <X2 />
                  <H5 darker>
                    Our engineering team has <br /> doubled in size year on year
                  </H5>
                </FlexItem>
              </Padding>
              <Padding bottom={{ xs: 20 }}>
                <FlexItem>
                  <Crown />
                  <H5 darker>World class engineers</H5>
                </FlexItem>
              </Padding>
            </Wrapper>
          </Col>
          <Col xs={12} md={6}>
            <Padding top={{ md: 15 }}>
              <Copy>
                YLD brings together a team of many different people — engineers,
                designers and creative thinkers — who come together to help our
                clients achieve their goals. Our experience stems from our team
                holding roles at companies including Canonical, Apple, Yahoo,
                Microsoft, and IBM.<br />
                <br />The sole focus is to create gardens — by advising our
                clients on open source technology choices years ahead of time
                and working together with them to create capabilities to support
                continued innovation.<br />
                <br />We have worked for some of the largest multinational
                enterprise companies, private clients and for government
                agencies across B2B and B2C environments. We believe our
                diversity makes us a stronger team, which helps us better serve
                our clients and our communities.
              </Copy>
            </Padding>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
