import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';

import Header from 'sections/header';
import WhoWeWorkWith from 'sections/who-we-work';
import CaseStudies from 'sections/case-studies';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';

export default () => (
  <Fragment>
    <Hero height="400">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} sm={7}>
            <Margin bottom={9}>
              <H2 whiter>Our Clients</H2>
            </Margin>
          </Col>
          <Col xs={12} sm={8}>
            <Margin bottom={35}>
              <Copy whiter>
                We’re proud to work with some amazing clients who are as
                passionate about their industries as we are about helping them
                build their technology futures.
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <WhoWeWorkWith />
    <CaseStudies />
    <JoinUs />
    <Footer />
  </Fragment>
);
