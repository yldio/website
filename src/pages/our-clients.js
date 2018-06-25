import React, { Fragment } from 'react';
import { mapProps } from 'recompose';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';

import Header from 'sections/header';
import WhoWeWorkWith from 'sections/who-we-work';
import CaseStudies from 'sections/case-studies';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';

const OurClients = ({ page, caseStudies, videos = [] }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero height="400" data-selector="our-clients:intro">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={9}>
              <H2 whiter>Our Clients</H2>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
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
    <CaseStudies videos={videos} studies={caseStudies} />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage,
  videos: props.data.videos.edges.map(({ node }) => node),
  caseStudies: props.data.allContentfulCaseStudy.edges
}))(OurClients);

export const pageQuery = graphql`
  query OurClientsQuery {
    contentfulPage(identifier: { eq: "our-clients" }) {
      title
      metadata {
        name
        content
      }
    }

    allContentfulCaseStudy {
      edges {
        node {
          clientName
          objective {
            objective
          }
          screenshotForHeadline {
            id
            file {
              url
            }
          }
          brandBackgroundColour
          brandFontColour
          tagline {
            tagline
          }
          topics {
            results
            challenges
          }
        }
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
