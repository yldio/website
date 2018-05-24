import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';

import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const CaseStudyTemplate = ({ slug, title, pageTitle }) => (
  <Fragment>
    <Helmet
      title={`YLD | ${pageTitle}`}
      meta={[
        { name: 'description', content: `${title} case study` },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <PageSection>
      <PageSectionHeader title={title} />
      <ul>
        <li>slug: {slug}</li>
        <li>title: {title}</li>
        <li>pageTitle: {pageTitle}</li>
      </ul>
    </PageSection>
  </Fragment>
);

CaseStudyTemplate.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default mapProps(props => props.data.caseStudiesYaml)(CaseStudyTemplate);

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudiesYaml(slug: { eq: $slug }) {
      slug
      title
      pageTitle
    }
  }
`;
