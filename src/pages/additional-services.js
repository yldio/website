import React, { Fragment } from 'react';
import { Grid, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, Copy } from 'components/typography';
import Hero from 'components/hero';
import graphql from 'graphql-tag';

import Header from 'sections/header';
import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';
import { mapProps } from 'recompose';
import ReactEngineering from 'sections/react-engineering';

const AdditionalServices = () => (
  <Fragment>
    <Hero height="400">
      <Margin bottom={28}>
        <Header dark />
      </Margin>
      <Grid>
        <Col xs={12} md={10}>
          <Margin bottom={9}>
            <H2 whiter>React software engineering</H2>
          </Margin>
        </Col>
        <Col xs={12} md={6}>
          <Margin bottom={35}>
            <Copy whiter>
              React is regarded as the premier way to build big, fast Web apps
              with JavaScript.
            </Copy>
          </Margin>
        </Col>
      </Grid>
    </Hero>
    <ReactEngineering />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage
}))(AdditionalServices);

export const pageQuery = graphql`
  query AdditionalServices {
    contentfulPage(identifier: { eq: "additional-services" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
