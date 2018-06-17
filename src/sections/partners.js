import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import Flex, { FlexItem } from 'styled-flex-component';

import { H4 } from 'components/typography';
import Section from 'components/section';

import docker from 'assets/docker.png';
import aws from 'assets/aws.png';
import node from 'assets/node.png';

export default () => (
  <Section>
    <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 0, md: 36 }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={{ xs: 15, md: 24 }}>
              <H4 decorated>Our technology partners</H4>
            </Margin>
          </Col>
        </Row>
        <Row middle="xs">
          <Col xs={12} md={4}>
            <Margin bottom={{ xs: 15, md: 0 }}>
              <Flex justifyCenter alignCenter>
                <FlexItem>
                  <img src={docker} />
                </FlexItem>
              </Flex>
            </Margin>
          </Col>
          <Col xs={12} md={4}>
            <Margin bottom={{ xs: 15, md: 0 }}>
              <Flex justifyCenter alignCenter>
                <FlexItem>
                  <img src={aws} />
                </FlexItem>
              </Flex>
            </Margin>
          </Col>
          <Col xs={12} md={4}>
            <Margin bottom={{ xs: 15, md: 0 }}>
              <Flex justifyCenter alignCenter>
                <FlexItem selfCenter>
                  <img src={node} />
                </FlexItem>
              </Flex>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
