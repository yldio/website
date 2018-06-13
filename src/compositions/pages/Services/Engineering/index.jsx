import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import { H2, H4, Copy } from 'components/Typography';

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

const Subtitle = H4.extend`
  margin-top: 86px;
  margin-bottom: 86px;
`;

export const Articles = styled.div`
  display: flex;
  margin: ${remcalc(80)} 0;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    flex-shrink: 0;
  }
`;

const Item = styled(Copy)`
  margin-bottom: 31px;
  color: #5e5cb2;
`;

const Description = styled(Copy)`
  margin-bottom: 56px;
  color: #433a4f;
`;

export default () => (
  <Section data-selector="services:engineering">
    <Divider bg={eng}>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <H2 lighter>Engineering Leadership</H2>
          </Col>
        </Row>
      </Grid>
    </Divider>
    <Grid>
      <Row>
        <Col xs={12} sm={10}>
          <Subtitle>
            We want to empower organisations to become technology companies,
            that leverage engineering to accelerate their growth and to give
            them flexibility and speed to react to market changes.
            <br />
            <br />
            By putting engineering at the heart of the business, we enable
            organisations to be effective, impactful, flexible and to build
            lasting products with great teams.
          </Subtitle>
        </Col>
      </Row>
      <Row between="xs">
        <Col xs={12} sm={5}>
          <Item uppercase>Back-End and Node.js</Item>
          <Description>
            We focus on incremental improvements that delivery business value.
            That’s why we work with Node.js in a microservices architecture. It
            allows us to both build new systems and migrate legacy systems into
            a collection of business-critical services that can be built,
            deployed and maintained separately, and at the same time composed to
            build complex products.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>Front-End and React.js</Item>
          <Description>
            Customers interact with our products through our front-end
            applications on multiple devices. We leverage that complexity with
            React and other front-end frameworks, where we create reusable and
            reliable components to solve business needs. This allows us to work
            incrementally, build well tested frontend components and at the same
            time implement design systems in a much more consistent and
            repeatable way.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>Mobile and React Native</Item>
          <Description>
            By using React Native, we build cross-platform mobile applications
            once and deploy them to both the App Store and the Play Store. This
            means we don’t need dedicated teams writing the same application in
            different languages, we are able to dramatically increase the speed
            at which we release features, and we improve maintainability and
            reusability by taking advantage of componentisation.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>DevOps and Kubernetes</Item>
          <Description>
            In a demanding world where quality, speed and reliability matters,
            we need to be able to react quickly and effectively to change.
            That’s why we focus on having a DevOps mentality, which gives the
            business the flexibility of deploying, scaling and delivering secure
            software to live environments at high velocity and continuously.
            This enables organisations to improve their products at a faster
            pace, which in turn allows them to satisfy their customers quickly
            and effectively.
          </Description>
        </Col>
      </Row>
    </Grid>
  </Section>
);
