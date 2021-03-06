import React, { Fragment } from 'react';
import { mapProps } from 'recompose';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';
import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';

import Header from 'sections/header';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';

import DeveloperCommunity from 'sections/developer-community';

const Community = ({ page, events, meetupCommunities, videos = [] }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero height="400">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={9}>
              <H2 whiter>Community</H2>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
            <Margin bottom={35}>
              <Copy whiter>
                We are Open Source adovcates, proud members of the Node.js
                Foundation and respected contributors to the developer
                community.
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <DeveloperCommunity
      videos={videos}
      events={events}
      meetupCommunities={meetupCommunities}
    />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage,
  videos: props.data.videos.edges.map(({ node }) => node),
  events: props.data.allContentfulMeetupEvent.edges.filter(
    item => new Date(`${item.node.startTime}`).getTime() > new Date().getTime()
  ),
  meetupCommunities: props.data.allContentfulMeetupCommunity.edges
}))(Community);

export const pageQuery = graphql`
  query CommunityQuery {
    contentfulPage(identifier: { eq: "community" }) {
      title
      metadata {
        name
        content
      }
    }

    allContentfulMeetupEvent {
      edges {
        node {
          date
          startTime
          endTime
          linkToEvent
          address {
            address
          }
          thisMeetupCode
          meetupUrlName
          eventTitle
          blurb {
            blurb
          }
        }
      }
    }

    allContentfulMeetupCommunity(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          meetupCommunityName
          meetupUrlName
          learnMoreLink
          description {
            description
          }
          videoYouTubeId
          placeholderImage {
            file {
              url
            }
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
