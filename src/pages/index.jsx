import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import HomePage from 'compositions/pages/Home';

const IndexPage = ({ metadata }) => (
  <Fragment>
    <Helmet title={metadata.title} meta={metadata.metadata} />
    <HomePage />
  </Fragment>
);

IndexPage.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default mapProps(props => ({
  metadata: props.data.metadata,
}))(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    metadata: metadataYaml(identifier: { eq: "index" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
