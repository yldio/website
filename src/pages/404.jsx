import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import Helmet from 'react-helmet';

const NotFoundPage = ({ metadata }) => (
  <Fragment>
    <Helmet title={metadata.title} meta={metadata.metadata} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Fragment>
);

NotFoundPage.propTypes = {
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
}))(NotFoundPage);

export const pageQuery = graphql`
  query NotFoundPageQuery {
    metadata: metadataYaml(identifier: { eq: "404" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
