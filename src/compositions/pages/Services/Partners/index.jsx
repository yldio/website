import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';

import PageSection from 'components/PageSection';
import { H2 } from 'components/Typography';

import docker from '../../../../assets/docker.png';
import aws from '../../../../assets/aws.png';
import node from '../../../../assets/node.png';

export default () => (
  <PageSection>
    <Grid>
      <Row>
        <Col xs={12}>
          <H2 decorated>Our technology partners</H2>
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
  </PageSection>
);
