import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';
import { mapProps } from 'recompose';
import ReactEngineering from 'sections/react-engineering';

const AdditionalServices = ({ page }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
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
