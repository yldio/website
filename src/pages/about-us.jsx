import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
// import { mapProps } from 'recompose';

import AboutUsPage from 'compositions/pages/AboutUs';

export default ({ page }) => (
  <Fragment>
    {/* <Helmet title={page.title} meta={page.metadata} /> */}
    <AboutUsPage />
  </Fragment>
);

// AboutUs.propTypes = {
//   page: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     metadata: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string,
//         content: PropTypes.string
//       })
//     ).isRequired
//   }).isRequired
// };

// export default mapProps(props => ({
//   page: props.data.contentfulPage
// }))(AboutUs);

// export const pageQuery = graphql`
//   query ServicesPageQuery {
//     contentfulPage(identifier: { eq: "about-us" }) {
//       title
//       metadata {
//         name
//         content
//       }
//     }
//   }
// `;
