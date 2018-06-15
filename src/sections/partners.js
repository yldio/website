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
    <Padding bottom={43} top={40}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={30}>
              <H4 decorated>Our technology partners</H4>
            </Margin>
          </Col>
        </Row>
        <Row around="xs">
          <Col xs={11}>
            <Flex justifyBetween alignCenter>
              <FlexItem>
                <img src={docker} alt="docker" width="176" height="140" />
              </FlexItem>
              <FlexItem>
                <img src={aws} alt="aws" width="126" height="75" />
              </FlexItem>
              <FlexItem>
                <img src={node} alt="node" width="223" height="79" />
              </FlexItem>
            </Flex>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
