import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Hr from 'components/hr';

import Header from 'sections/header';
import Stats from 'sections/stats';
import OurTeam from 'sections/our-team';
import ContactUs from 'sections/contact-us';
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
              <H2 whiter>About Us</H2>
            </Margin>
          </Col>
          <Col xs={12} sm={8}>
            <Margin bottom={{ xs: 15, sm: 35 }}>
              <Copy whiter>
                Curious thinkers, technology pioneers and custom software
                engineers. Our teams are people who want to use technology to
                build, to create digital transformation. We innovate by doing,
                working lean and sharing knowledge so everyone grows.
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Stats />
    <OurTeam />
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <ContactUs />
    <JoinUs />
    <Footer />
  </Fragment>
);
