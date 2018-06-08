import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import HomePage from 'compositions/pages/Home';

const IndexPage = ({ page }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <HomePage />
  </Fragment>
);

IndexPage.propTypes = {
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
}))(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    contentfulPage(identifier: { eq: "index" }) {
      title
      metadata {
        name
        content
      }
    }
  }
`;
