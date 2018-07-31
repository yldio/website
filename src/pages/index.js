import React, { Fragment } from 'react';
import { mapProps } from 'recompose';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import { H1, H3, H4, Copy } from 'components/typography';
import Section from 'components/section';
import Hero from 'components/hero';
import Button from 'components/button';
import Hr from 'components/hr';
import Card, { CardsList } from 'components/card';

import WhatDoWeDo from 'sections/what-we-do';
import WhatWeEnable from 'sections/what-we-enable';
import WhoWeWorkWith from 'sections/who-we-work';

import KnownFor from 'sections/what-we-known-for';
import JoinUs from 'sections/join-us';
import Header from 'sections/header';
import Footer from 'sections/footer';

import UnexpectedBg from 'assets/unexpected-bg.png';
import InnovationBg from 'assets/innovation-core-bg.png';

const Index = ({ page, videos = [], home, logos }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero bg={InnovationBg} data-selector="home:intro">
      <Margin bottom={38}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={12}>
              <H1 whiter>{home.title}</H1>
            </Margin>
          </Col>
          <Col xs={12} md={6}>
            <Margin bottom={12}>
              <Copy whiter>{home.heroDescription}</Copy>
            </Margin>
            <Margin bottom={{ xs: 16, md: 111 }}>
              <Button white to="/services">
                {home.buttonServices}
              </Button>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Section data-selector="what-do-we-do:intro">
      <Grid>
        <CardsList>
          <Row center="xs" around="xs" top="xs">
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="delivery-card" title="Co-delivery" width="100%">
                  <Copy>
                    Points to cover: Talent, predictability, capability and
                    culture, results. Dedicated office, Talent cycle, your own
                    team
                  </Copy>
                </Card>
              </Margin>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="training-card" title="Training" width="100%">
                  <Copy>
                    Points to cover: Certification, hands on courses, workforce
                    requalificiation
                  </Copy>
                </Card>
              </Margin>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="consulting-card" title="Consultancy" width="100%">
                  <Copy>
                    Points to cover: Discovery, Audits, Architecture,
                    Performance, Security, Business Planning, Service Design and
                    Creation, Design Systems
                  </Copy>
                </Card>
              </Margin>
            </Col>
          </Row>
        </CardsList>
        <WhoWeWorkWith logos={logos} />
        <Margin top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }} inline>
          <Row>
            <Col xs={12} md={6}>
              <H3 decorated>{home.whatDoWeDoTitle}</H3>
            </Col>
            <Col xs={12} md={6}>
              <Copy>
                YLD is one of the world’s fastest growing technology
                consultancies.<br />
                <br />
                We have a firm commitment to the open source community — we aim
                to create a long standing engineering culture and delivery
                capability in each piece of work we do.<br />
                <br />
                We work alongside our clients to empower them to build and
                sustain the technologies, products, and process we co-deliver.<br />
                <br />
                We work on the core of the businesses we partner with, and we
                are relenless about helping our clients be successful.
              </Copy>
            </Col>
          </Row>
        </Margin>
      </Grid>
    </Section>
    <WhatDoWeDo videos={videos} />
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <WhatWeEnable />
    <KnownFor />
    <Hero bg={UnexpectedBg} center data-selector="home:call-out">
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
  home: props.data.allContentfulHome.edges[0].node,
  videos: props.data.videos.edges.map(({ node }) => node),
  logos: props.data.allContentfulLogoForGrid.edges
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

    allContentfulHome {
      edges {
        node {
          title
          heroDescription
          buttonServices
          whatDoWeDoTitle
        }
      }
    }

    allContentfulLogoForGrid(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          clientName
          logoImage {
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
