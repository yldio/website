import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import remcalc from 'remcalc';

import { H1, H3, H4, Copy } from 'components/typography';
import Checklist, { Item as CheckItem } from 'components/checklist';
import Section from 'components/section';
import Hero from 'components/hero';
import Button from 'components/button';
import Card from 'components/card';
import Hr from 'components/hr';

import WhatDoWeDo from 'sections/what-we-do';
import WhatWeEnable from 'sections/what-we-enable';
import KnownFor from 'sections/what-we-known-for';
import JoinUs from 'sections/join-us';
import Header from 'sections/header';
import Footer from 'sections/footer';

import KnowForBg from 'assets/know-for-bg.png';
import UnexpectedBg from 'assets/unexpected-bg.png';

const VideoBox = styled.div`
  width: ${remcalc(465)};
  height: ${remcalc(288)};
  background-image: linear-gradient(219deg, #6a7277, #4f565b),
    linear-gradient(#383e42, #383e42);
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
`;

export default () => (
  <Fragment>
    <Hero dark>
      <Margin bottom={38}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} sm={7}>
            <Margin bottom={12}>
              <H1 whiter>Innovation at the core, together</H1>
            </Margin>
          </Col>
          <Col xs={12} sm={6}>
            <Margin bottom={12}>
              <Copy whiter>
                We enable the worlds leading enterprises to drive digital
                transformation and define their technology future through
                strategy, design and custom software engineering.
              </Copy>
            </Margin>
            <Margin bottom={{ xs: 16, md: 111 }}>
              <Button white to="/services">
                Our Services
              </Button>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <WhatDoWeDo />
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <VideoBox />
          </Col>
          <Col xs={12} md={6}>
            <VideoBox />
          </Col>
          <Col xs={12} md={6}>
            <VideoBox />
          </Col>
          <Col xs={12} md={6}>
            <VideoBox />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <WhatWeEnable />
    <KnownFor />
    <Hero bg={UnexpectedBg} height="513" center>
      <Grid>
        <Row center="xs" middle="xs">
          <Col xs={12} sm={9}>
            <H4 whiter decorated center>
              Sometimes doing the unexpected. Helping you to disrupt, mitigate
              risks and successfully reinvent.
            </H4>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <JoinUs />
    <Footer />
  </Fragment>
);
