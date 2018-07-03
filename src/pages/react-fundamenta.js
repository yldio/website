import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import graphql from 'graphql-tag';

import JoinUs from 'sections/join-us';
import Footer from 'sections/footer';
import { mapProps } from 'recompose';
import ReactEngineering from 'sections/react-engineering';

const ReactFundamental = ({ page, reactFundamental }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <ReactEngineering reactFundamental={reactFundamental} />
    <JoinUs />
    <Footer />
  </Fragment>
);

export default mapProps(props => ({
  page: props.data.contentfulPage,
  reactFundamental: props.data.allContentfulReactFundamental.edges
}))(ReactFundamental);

export const pageQuery = graphql`
  query ReactFundamental {
    contentfulPage(identifier: { eq: "react-fundamental" }) {
      title
      metadata {
        name
        content
      }
    }

    allContentfulReactFundamental {
      edges {
        node {
          headerTitle
          headerSubtitle
          servicesTitle
          servicesDescription {
            servicesDescription
          }
          subtitleLeft
          subtitleRight
          subdescriptionLeft {
            subdescriptionLeft
          }
          subdescriptionRight {
            subdescriptionRight
          }
        }
      }
    }
  }
`;
