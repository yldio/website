import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import ServicesPage from 'compositions/pages/Services';

const Services = ({ page }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <ServicesPage />
  </Fragment>
);

Services.propTypes = {
  page: PropTypes.shape({
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
  page: props.data.contentfulPage,
}))(Services);

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
