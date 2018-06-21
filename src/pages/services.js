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

import Header from 'sections/header';
import Services from 'sections/services';
import Challenges from 'sections/challenges';
import OurApproach from 'sections/our-approach';
import Consultancy from 'sections/consultancy';
import Techniques from 'sections/techniques';
import Design from 'sections/design-product';
import Engineering from 'sections/engineering-leadership';
import AddCode from 'sections/remoted-dedicated-services';
import Knowledge from 'sections/knowledge-transfer';
import Partners from 'sections/partners';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';

const ServicesPage = ({ page }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <Hero data-selector="services:intro">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} md={7}>
            <Margin bottom={9}>
              <H2 whiter>Services</H2>
            </Margin>
          </Col>
          <Col xs={12} md={8}>
            <Margin bottom={35}>
              <Copy whiter>
                We enable your organisation to deliver world-class technology
                and user experiences, long after we leave. These are the
                services we currently offer:
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Services />
    <Challenges />
    <OurApproach />
    <Consultancy />
    <Techniques />
    <Design />
    <Engineering />
    <AddCode />
    <Knowledge />
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <Partners />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage
}))(ServicesPage);

export const pageQuery = graphql`
  query ServicesPageQuery {
    contentfulPage(identifier: { eq: "services" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
