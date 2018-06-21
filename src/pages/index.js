import React, { Fragment } from 'react';
import { mapProps } from 'recompose';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Helmet from 'react-helmet';

import { H1, H4, Copy } from 'components/typography';
import Section from 'components/section';
import Hero from 'components/hero';
import Button from 'components/button';
import Hr from 'components/hr';

import WhatDoWeDo from 'sections/what-we-do';
import WhatWeEnable from 'sections/what-we-enable';
import KnownFor from 'sections/what-we-known-for';
import JoinUs from 'sections/join-us';
import Header from 'sections/header';
import Footer from 'sections/footer';

import UnexpectedBg from 'assets/unexpected-bg.png';
import InnovationBg from 'assets/innovation-core-bg.png';

const Index = ({ page, videos = [] }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero bg={InnovationBg}>
      <Margin bottom={38}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={12}>
              <H1 whiter>Innovation at the core, together</H1>
            </Margin>
          </Col>
          <Col xs={12} md={6}>
            <Margin bottom={12}>
              <Copy whiter>
                We enable the worlds leading enterprises to drive digital
                transformation and create their technology future through
                culture, design and software engineering.
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
    <WhatDoWeDo videos={videos} />
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <WhatWeEnable />
    <KnownFor />
    <Hero bg={UnexpectedBg} center>
      <Grid>
        <Row center="xs" middle="xs">
          <Col xs={12} md={9}>
            <Margin top={94} bottom={94}>
              <H4 whiter decorated center>
                Sometimes doing the unexpected. Helping you to disrupt, mitigate
                risks and successfully reinvent.
              </H4>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage,
  videos: props.data.videos.edges.map(({ node }) => node)
}))(Index);

export const pageQuery = graphql`
  query IndexQuery {
    contentfulPage(identifier: { eq: "index" }) {
      title
      metadata {
        name
        content
      }
    }

    videos: allContentfulAsset(
      filter: { file: { contentType: { eq: "video/mp4" } } }
    ) {
      edges {
        node {
          id
          internal {
            type
          }
          title
          file {
            url
            contentType
          }
        }
      }
    }
  }
`;
