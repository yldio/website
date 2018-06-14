import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import { H2, H4, Copy } from 'components/Typography';

import BaseDivider from '../Divider';
import design from '../assets/design-header.png';

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
  <Section data-selector="services:help">
    <Divider bg={design}>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <H2 lighter>Design & Product</H2>
          </Col>
        </Row>
      </Grid>
    </Divider>
    <Grid>
      <Row>
        <Col xs={12} sm={10}>
          <Subtitle>
            A great company continuously finds better solutions to its customers
            biggest problems. Design is the bridge between the two. Great design
            goes deeper than just how something looks, it’s why and how it
            works, for your customers and for your business.
          </Subtitle>
        </Col>
      </Row>
      <Row between="xs">
        <Col xs={12} sm={5}>
          <Item uppercase>Design Leadership</Item>
          <Description>
            Design Leadership helps build this voice at the centre of your
            companies process, enabling Design Thinking to drive innovation and
            quality across your organisation.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>Design Systems & DesignOps</Item>
          <Description>
            For teams to deliver a great experience continuously, it’s necessary
            to have a toolset that enables an organisation to answer customer
            problems quickly, at high-quality and iterate rapidly. Design
            Systems put a powerful product design toolset at the centre of every
            team.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>Design Sprints</Item>
          <Description>
            Design Sprints enable us to build a deep understanding of the
            customer problems teams are facing, and to move quickly into
            prototyping and testing assumptions and original ideas quickly.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>User Interface Design & Branding</Item>
          <Description>
            Great UI design connects your users with your product. It’s the most
            tactile, direct interaction people will have with your brand, your
            services, and your customer experience.
          </Description>
        </Col>
        <Col xs={12} sm={5}>
          <Item uppercase>Research, Usability and User Experience</Item>
          <Description>
            Knowing that you’re solving the right customer problems, and with
            the right user experience is key to growing your product. Great
            products dont just look good, they enable their users to achieve
            their goals effortlessly.
          </Description>
        </Col>
      </Row>
    </Grid>
  </Section>
);
