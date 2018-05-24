import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';

import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const CaseStudyTemplate = ({ slug, title }) => (
  <Fragment>
    <Helmet
      title={`YLD | ${title}`}
      meta={[
        { name: 'description', content: `${title}` },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <PageSection>
      <PageSectionHeader title={title} />
      <span>slug: {slug}</span>
    </PageSection>
  </Fragment>
);

CaseStudyTemplate.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default mapProps(props => props.data.caseStudiesYaml)(CaseStudyTemplate);

export const caseStudyFragment = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudiesYaml(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;
