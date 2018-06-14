import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import { pink } from 'styles/colours';
import Card from 'components/Card';
import { H4, H2, Copy } from 'components/Typography';

const Cards = Flex.extend`
  margin-top: -176px;
  margin-bottom: 77px;
  z-index: 2;
  position: relative;
`;

const Section = styled(PageSection)`
  padding-bottom: 150px;
`;

export default () => (
  <Fragment>
    <Section dark data-selector="services:help">
      <Grid>
        <Row>
          <Col xs={12}>
            <H4 lighter decorated>
              How we educate for knowledge transfer
            </H4>
          </Col>
        </Row>
      </Grid>
    </Section>
    <PageSection data-selector="services:help">
      <Grid>
        <Cards justifyBetween>
          <FlexItem>
            <Card
              title="Private Training"
              points={[
                'Hands-on learning experience, in-person classes',
                'Tailoried training program delivered on-site to suit your needs',
                'Ensures your software engineers share a baseline'
              ]}
            />
          </FlexItem>
          <FlexItem>
            <Card
              title="Pairing"
              points={[
                'Ongoing tutoring that covers all aspect of tech and product delivery',
                'Seasoned YLD engineers and designers available to answer questions at all times',
                'Experienced supervisio for code review'
              ]}
            />
          </FlexItem>
          <FlexItem>
            <Card
              title="Certification"
              points={[
                'Gain recognition for expertise and ability to employ best practices',
                'Assess engineering candidates expertise and compare the results with your team’s performance'
              ]}
            />
          </FlexItem>
        </Cards>
      </Grid>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <H2 decorated>
              Our goal is never to just deliver but always to also upskill your
              whole team.
            </H2>
          </Col>
          <Col xs={12} sm={6}>
            <Copy>
              We are an agile, flexible and passionate team consisting of
              strategy, design and engineering.
              <br />
              <br />
              We aspire to bring you the most up-to-date technology, with the
              minimal hassle possible.
              <br />
              <br />
              We take a hands on approach in our work, engaging directly with
              you in every stage of the development process.
              <br />
              <br />
              We take ownership of the delivery of the project or we can
              integrate at critical points with your team according to your
              needs.
              <br />
              <br />
              We enable your organisation to deliver world-class technology and
              user experiences, long after we leave.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </PageSection>
  </Fragment>
);
