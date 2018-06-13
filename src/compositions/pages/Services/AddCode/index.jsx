import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import PageSection from 'components/PageSection';
import { H2, H4, Copy } from 'components/Typography';
import BaseCard from 'components/Card';

import BaseDivider from '../Divider';
import eng from '../assets/leadership-header.png';

const Divider = styled(BaseDivider)`
  padding: 0 0 60px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-content: stretch;
  align-items: stretch;
`;

const Section = styled(PageSection)`
  padding-top: 0;
`;

const Subtitle = Copy.extend`
  margin-top: 86px;
  margin-bottom: 86px;
`;

const Card = styled(BaseCard)`
  margin-top: -108px;
  position: relative;
  float: right;
`;

export default () => (
  <Section data-selector="services:addcode">
    <Divider bg={eng}>
      <Grid>
        <Row>
          <Col xs={12} sm={7}>
            <H2 lighter>Remote Dedicated Services - Addcode </H2>
          </Col>
        </Row>
      </Grid>
    </Divider>
    <Grid>
      <Row>
        <Col xs={12} sm={6}>
          <Subtitle>
            If you are looking for iterative and Agile development strategies;
            cooperative development procedures; fast and easy communication;
            rapid prototyping; and user-centric design, remote teams nearshore
            are is the option for you.
            <br />
            <br />
            Utilizing our Addcode, our remote option brings benefits. Meaning
            this method provides advantages in both the initial cost standpoint,
            and in its risk-averseness.
          </Subtitle>
        </Col>
        <Col xs={12} sm={6}>
          <Card
            title="ADDCODE BRINGS YOU"
            points={[
              'Scalability',
              'Language skills and proficiency',
              'Tech Skills',
              '	Types of services',
              'Complexity of work',
              'Geography - same time zone',
              'Talent offering',
              'Choice of location - Porto & Lisbon, Manchester '
            ]}
          />
        </Col>
      </Row>
    </Grid>
  </Section>
);
