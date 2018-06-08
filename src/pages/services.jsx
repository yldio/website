import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import ServicesPage from 'compositions/pages/Services';

const Services = ({ metadata }) => (
  <Fragment>
    <Helmet title={metadata.title} meta={metadata.metadata} />
    <ServicesPage />
  </Fragment>
);

Services.propTypes = {
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
}))(Services);

export const pageQuery = graphql`
  query ServicesPageQuery {
    metadata: metadataYaml(identifier: { eq: "services" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
