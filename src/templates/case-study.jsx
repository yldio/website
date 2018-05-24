import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';

import PageHero from 'components/PageHero';
import PageSection from 'components/PageSection';

import TagList from 'compositions/templates/case-study/TagList';

const CaseStudyTemplate = ({ shortDescription, tags, title, pageTitle }) => (
  <Fragment>
    <Helmet
      title={`YLD | ${pageTitle}`}
      meta={[
        { name: 'description', content: `${title} case study` },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <PageSection>
      <PageHero title={title}>
        {shortDescription}
        <br />
        <TagList tags={tags} />
      </PageHero>
    </PageSection>
  </Fragment>
);

CaseStudyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default mapProps(props => props.data.caseStudiesYaml)(CaseStudyTemplate);

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudiesYaml(slug: { eq: $slug }) {
      title
      pageTitle
      tags
      shortDescription
    }
  }
`;
