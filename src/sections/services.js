import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';
import BaseLink from 'gatsby-link';

import {
  Resource,
  Design,
  Engineering,
  Rocket,
  Training
} from 'components/icons';

import { H4, Copy } from 'components/typography';
import Section from 'components/section';

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(27)};
  text-decoration: none;
`;

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
            <Link to="/additional-services/?pageRef=digital-transformation">
              <ServiceItem>Digital Transformation</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=engineering-consultancy">
              <ServiceItem>Engineering Consultancy</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=product-consultancy">
              <ServiceItem>Product Consultancy</ServiceItem>
            </Link>
          </Service>
          <Service md={3} icon={<Design />}>
            <ServiceTitle>Design & Product</ServiceTitle>
            <Link to="/additional-services/?pageRef=design-systems-operations">
              <ServiceItem>Design Systems &amp; Design Operations</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=design-sprints">
              <ServiceItem>Design Sprints</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=user-interface-design">
              <ServiceItem>User Interface Design &amp; Branding</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=research-usability">
              <ServiceItem>Research, Usability and User Experience</ServiceItem>
            </Link>
          </Service>
          <Service icon={<Engineering />}>
            <ServiceTitle>Engineering</ServiceTitle>
            <Link to="/additional-services/?pageRef=engineering-leadership">
              <ServiceItem>Engineering Leadership</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=back-end-node">
              <ServiceItem>Back End &amp; Node.js</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=front-end-react">
              <ServiceItem>Front End &amp; React.js</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=devops-kubernetes">
              <ServiceItem>DevOps &amp; Kubernetes</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=mobile-react-native">
              <ServiceItem>Mobile &amp; React Native</ServiceItem>
            </Link>
          </Service>
          <Service icon={<Training />}>
            <ServiceTitle>Training</ServiceTitle>
            <Link to="/additional-services/?pageRef=node-training">
              <ServiceItem>Node Training</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=react-training">
              <ServiceItem>React Training</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=design-systems-training">
              <ServiceItem>Design Systems Training</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=ux-research-training">
              <ServiceItem>UX Research Training</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=ux-design-training">
              <ServiceItem>UX Design Training</ServiceItem>
            </Link>
          </Service>
          <Service icon={<Rocket />}>
            <ServiceTitle>Addcode</ServiceTitle>
            <Link to="/additional-services/?pageRef=remote-teams">
              <ServiceItem>Remote Dedicated Teams</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=geography">
              <ServiceItem>Geography - same time zone</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=scalability">
              <ServiceItem>Scalability</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=talent">
              <ServiceItem>Talent</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=location">
              <ServiceItem>Choice of location</ServiceItem>
            </Link>
            <Link to="/additional-services/?pageRef=lisbon-porto-manchester">
              <ServiceItem>Lisbon, Porto, Manchester</ServiceItem>
            </Link>
          </Service>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
