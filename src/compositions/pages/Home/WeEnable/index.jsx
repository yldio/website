import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import List, { Item } from 'components/CheckList';
import PageSection from 'components/PageSection';
import { H2 } from 'components/Typography';

const CheckList = styled(List)`
  margin-top: 60px;
`;

const WeEnable = () => (
  <Fragment>
    <PageSection data-selector="home:community">
      <Grid data-selector="home:community">
        <Row>
          <Col xs={12}>
            <H2 decorated>What do we do</H2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CheckList>
              <Item>Transform, innovate and differentiate at speed</Item>
              <Item>
                Grow capability inside your organisation - consulting, training,
                pairing and education
              </Item>
              <Item>
                Adopt cutting edge technologies - We’re pioneers in JS, Node.js,
                React and Design Systems
              </Item>
              <Item>Grow a design & engineering culture</Item>
              <Item>
                Build custom software solutions that become your asset
              </Item>
              <Item>
                Deliver the right user experience at the right time, on the
                right channel
              </Item>
            </CheckList>
          </Col>
        </Row>
      </Grid>
    </PageSection>
  </Fragment>
);

export default WeEnable;
