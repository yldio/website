import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import { Margin, Padding } from 'styled-components-spacing';
import remcalc from 'remcalc';

import {
  Resource,
  Design,
  Engineering,
  Rocket,
  Training
} from 'components/icons';

import { H4, Copy } from 'components/typography';
import Section from 'components/section';

const ServiceTitle = H4.extend`
  line-height: ${remcalc(25)};
  font-size: ${remcalc(21)};
  margin-bottom: ${remcalc(20)};
`;

const ServiceItem = Copy.extend`
  line-height: ${remcalc(28)};
  font-size: ${remcalc(16)};
  margin-bottom: ${remcalc(15)};
`;

const ServiceIcon = Flex.extend`
  width: ${remcalc(50)};
  height: ${remcalc(50)};
  margin-bottom: ${remcalc(15)};
`;

const Service = ({ icon, children, ...props }) => (
  <Col xs={6} md={2} {...props}>
    <Margin bottom={{ xs: 15, md: 0 }}>
      <ServiceIcon>
        <FlexItem>{icon}</FlexItem>
      </ServiceIcon>
      {children}
    </Margin>
  </Col>
);

export default () => (
  <Section data-selector="services">
    <Padding top={25} bottom={{ xs: 0, md: 36 }}>
      <Grid>
        <Row between="xs" center="xs">
          <Service icon={<Resource />}>
            <ServiceTitle>Strategy</ServiceTitle>
            <ServiceItem>Digital Transformation</ServiceItem>
            <ServiceItem>Engineering Consultancy</ServiceItem>
            <ServiceItem>Product Consultancy</ServiceItem>
          </Service>
          <Service md={3} icon={<Design />}>
            <ServiceTitle>Design & Product</ServiceTitle>
            <ServiceItem>Design Systems &amp; Design Operations</ServiceItem>
            <ServiceItem>Design Sprints</ServiceItem>
            <ServiceItem>User Interface Design &amp; Branding</ServiceItem>
            <ServiceItem>Research, Usability and User Experience</ServiceItem>
          </Service>
          <Service icon={<Engineering />}>
            <ServiceTitle>Engineering</ServiceTitle>
            <ServiceItem>Engineering Leadership</ServiceItem>
            <ServiceItem>Back End &amp; Node.js</ServiceItem>
            <ServiceItem>Front End &amp; React.js</ServiceItem>
            <ServiceItem>DevOps &amp; Kubernetes</ServiceItem>
            <ServiceItem>Mobile &amp; React Native</ServiceItem>
          </Service>
          <Service icon={<Training />}>
            <ServiceTitle>Training</ServiceTitle>
            <ServiceItem>Node Training</ServiceItem>
            <ServiceItem>React Training</ServiceItem>
            <ServiceItem>Design Systems Training</ServiceItem>
            <ServiceItem>UX Research Training</ServiceItem>
            <ServiceItem>UX Design Training</ServiceItem>
          </Service>
          <Service icon={<Rocket />}>
            <ServiceTitle>Addcode</ServiceTitle>
            <ServiceItem>Remote Dedicated Teams</ServiceItem>
            <ServiceItem>Geography - same time zone</ServiceItem>
            <ServiceItem>Scalability</ServiceItem>
            <ServiceItem>Talent</ServiceItem>
            <ServiceItem>Choice of location</ServiceItem>
            <ServiceItem>Lisbon, Porto, Manchester</ServiceItem>
          </Service>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
