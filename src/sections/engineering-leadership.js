import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';

import { H3, H4, H5, Copy } from 'components/typography';
import Section from 'components/section';
import Hero from 'components/hero';

import engineeringLeadershipBg from 'assets/engineering-leadership-bg.png';

const Item = ({ title, children }) => (
  <Col xs={12} md={5}>
    <Margin bottom={{ xs: 6, md: 9 }}>{title}</Margin>
    <Margin bottom={{ xs: 24, md: 36 }}>{children}</Margin>
  </Col>
);

export default () => (
  <Fragment>
    <Hero bg={engineeringLeadershipBg} data-selector="engineering:intro">
      <Padding top={175} bottom={25}>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <H3 whiter>Engineering Leadership</H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Section data-selector="engineering:description">
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 0, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12} md={10}>
              <Margin bottom={{ xs: 9, md: 24 }}>
                <H4>
                  We want to empower organisations to become technology
                  companies, that leverage engineering to accelerate their
                  growth and to give them flexibility and speed to react to
                  market changes.<br />
                  <br />By putting engineering at the heart of the business, we
                  enable organisations to be effective, impactful, flexible and
                  to build lasting products with great teams.
                </H4>
              </Margin>
            </Col>
          </Row>
          <Row between="xs">
            <Item title={<H5>Back-End and Node.js</H5>}>
              <Copy>
                We focus on incremental improvements that delivery business
                value. That’s why we work with Node.js in a microservices
                architecture. It allows us to both build new systems and migrate
                legacy systems into a collection of business-critical services
                that can be built, deployed and maintained separately, and at
                the same time composed to build complex products.
              </Copy>
            </Item>
            <Item title={<H5>Front-End and React.js</H5>}>
              <Copy>
                Customers interact with our products through our front-end
                applications on multiple devices. We leverage that complexity
                with React and other front-end frameworks, where we create
                reusable and reliable components to solve business needs. This
                allows us to work incrementally, build well tested frontend
                components and at the same time implement design systems in a
                much more consistent and repeatable way.
              </Copy>
            </Item>
            <Item title={<H5>Mobile and React Native</H5>}>
              <Copy>
                By using React Native, we build cross-platform mobile
                applications once and deploy them to both the App Store and the
                Play Store. This means we don’t need dedicated teams writing the
                same application in different languages, we are able to
                dramatically increase the speed at which we release features,
                and we improve maintainability and reusability by taking
                advantage of componentisation.
              </Copy>
            </Item>
            <Item title={<H5>DevOps and Kubernetes</H5>}>
              <Copy>
                In a demanding world where quality, speed and reliability
                matters, we need to be able to react quickly and effectively to
                change. That’s why we focus on having a DevOps mentality, which
                gives the business the flexibility of deploying, scaling and
                delivering secure software to live environments at high velocity
                and continuously. This enables organisations to improve their
                products at a faster pace, which in turn allows them to satisfy
                their customers quickly and effectively.
              </Copy>
            </Item>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
