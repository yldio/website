import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import { pink } from 'styles/colours';
import Card from 'components/Card';
import { H4, H2, Copy } from 'components/Typography';

import Divider from '../Divider';

const Section = styled(PageSection)`
  padding-top: 0;
`;

const Cards = Flex.extend`
  margin-top: -77px;
  margin-bottom: 77px;
  z-index: 2;
  position: relative;
`;

const Item = Copy.withComponent('li').extend`
  &::before {
    content: '•';
    margin-right: ${remcalc(20)};
    color: ${pink};
  }

  &:not(:last-child) {
    margin-bottom: ${remcalc(20)};
  }
`;

export default () => (
  <Section dark data-selector="services:help">
    <Divider>
      <PageSection>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <H4 lighter decorated>
                We bring you the latest techniques to help you meet your
                challenges:
              </H4>
            </Col>
          </Row>
        </Grid>
      </PageSection>
    </Divider>
    <Grid>
      <Cards justifyBetween>
        <FlexItem>
          <Card
            title="YLD DELIVERS"
            points={['Lean Culture', 'Micro-services']}
          />
        </FlexItem>
        <FlexItem>
          <Card
            title="Leveraging"
            points={['Vertical teams', 'Open source software']}
          />
        </FlexItem>
        <FlexItem>
          <Card
            title="Enabling"
            points={[
              'Experimentation',
              '	Continuous delivery with zero downtime'
            ]}
          />
        </FlexItem>
      </Cards>
      <Row>
        <Col xs={12}>
          <H2 lighter decorated>
            To bring you business value
          </H2>
        </Col>
        <Col xs={3}>
          <ul>
            <Item light>Utilise disruptive technology</Item>
            <Item light>Stay lean and compete</Item>
          </ul>
        </Col>
        <Col xs={3}>
          <ul>
            <Item light>Transform</Item>
            <Item light>Innovate</Item>
          </ul>
        </Col>
        <Col xs={3}>
          <ul>
            <Item light>Speed of delivery and efficiency</Item>
            <Item light>Bridge the skills gap</Item>
          </ul>
        </Col>
        <Col xs={3}>
          <ul>
            <Item light>Mitigate risk</Item>
            <Item light>Lower cost</Item>
          </ul>
        </Col>
      </Row>
    </Grid>
  </Section>
);
