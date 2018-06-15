import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import breakpoint from 'styled-components-breakpoint';
import Flex, { FlexItem } from 'styled-flex-component';
import { Margin, Padding } from 'styled-components-spacing';
import remcalc from 'remcalc';

import { Pair, Teams, Blog } from 'components/icons';

import { H3, H5, Copy } from 'components/typography';
import Section from 'components/section';

const ChallengeIcon = Flex.extend`
  width: ${remcalc(50)};
  height: ${remcalc(50)};
  margin-bottom: ${remcalc(6)};

  ${breakpoint('sm')`
    margin-bottom: ${remcalc(12)};
  `};
`;

const ChallengeItem = Copy.extend`
  color: ${props => props.theme.colors.thistle};
  margin-bottom: ${remcalc(6)};

  ${breakpoint('sm')`
    margin-bottom: ${remcalc(12)};
  `};
`;

const Challenge = ({ icon, title, children, ...props }) => (
  <Col xs={12} sm={4} {...props}>
    <ChallengeIcon>
      <FlexItem>{icon}</FlexItem>
    </ChallengeIcon>
    <Margin bottom={9}>{title}</Margin>
    <Margin bottom={{ xs: 15, sm: 0 }}>{children}</Margin>
  </Col>
);

export default () => (
  <Section dark>
    <Padding top={{ xs: 15, sm: 36 }} bottom={{ xs: 0, sm: 36 }}>
      <Grid>
        <Margin bottom={{ xs: 15, sm: 36 }}>
          <Row>
            <Col xs={12}>
              <H3 decorated whiter>
                Common client challenges
              </H3>
              <Copy white>
                We help you future proof your business through a new style of
                consulting, ground up.
              </Copy>
            </Col>
          </Row>
        </Margin>
        <Row between="xs">
          <Challenge
            icon={<Pair />}
            title={<H5 whiter>Customer experience</H5>}
          >
            <ChallengeItem>Digital Transformation</ChallengeItem>
            <ChallengeItem>Engineering Consultancy</ChallengeItem>
            <ChallengeItem>Product Consultancy</ChallengeItem>
          </Challenge>
          <Challenge
            icon={<Teams />}
            title={<H5 whiter>Disruptive technology</H5>}
          >
            <ChallengeItem>
              Design Systems &amp; Design Operations
            </ChallengeItem>
            <ChallengeItem>Design Sprints</ChallengeItem>
            <ChallengeItem>User Interface Design &amp; Branding</ChallengeItem>
            <ChallengeItem>
              Research, Usability and User Experience
            </ChallengeItem>
          </Challenge>
          <Challenge icon={<Blog />} title={<H5 whiter>Skills gap</H5>}>
            <ChallengeItem>Engineering Leadership</ChallengeItem>
            <ChallengeItem>Back End &amp; Node.js</ChallengeItem>
            <ChallengeItem>Front End &amp; React.js</ChallengeItem>
            <ChallengeItem>DevOps &amp; Kubernetes</ChallengeItem>
            <ChallengeItem>Mobile &amp; React Native</ChallengeItem>
          </Challenge>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
