import React, { Fragment } from 'react';
import { mapProps } from 'recompose';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Hr from 'components/hr';

import Map from 'sections/map';
import Header from 'sections/header';
import Stats from 'sections/stats';
import OurTeam from 'sections/our-team';
import ContactUs from 'sections/contact-us';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';

const AboutUs = ({ page, video }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero height="400" data-selector="about-us:intro">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={9}>
              <H2 whiter>About Us</H2>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
            <Margin bottom={{ xs: 15, md: 35 }}>
              <Copy whiter>
                Curious thinkers, technology pioneers and software engineers.
                Our teams are people who want to use technology to build, to
                create capabilities in our clients. We innovate by doing,
                working lean and sharing knowledge so everyone grows.
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Stats />
    <OurTeam video={video} />
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <Map />
    <ContactUs />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage,
  video: props.data.video
}))(AboutUs);

export const pageQuery = graphql`
  query AboutUsQuery {
    contentfulPage(identifier: { eq: "about-us" }) {
      title
      metadata {
        name
        content
      }
    }

    video: contentfulAsset(title: { eq: "get-together" }) {
      file {
        url
        contentType
      }
    }
  }
`;
