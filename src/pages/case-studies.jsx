import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import Link from 'components/Link';
import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const CaseStudiesPage = ({ caseStudies }) => (
  <Fragment>
    <Helmet
      title="YLD | Case Studies"
      meta={[
        { name: 'description', content: 'YLD Case Studies' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <PageSection>
      <PageSectionHeader title="Case Studies" />
      <ul>
        {caseStudies.map(caseStudy => (
          <li key={caseStudy.slug}>
            <Link href={`/case-studies/${caseStudy.slug}`}>
              {caseStudy.title}
            </Link>
          </li>
        ))}
      </ul>
    </PageSection>
  </Fragment>
);

CaseStudiesPage.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default mapProps(props => ({
  caseStudies: props.data.allCaseStudiesYaml.edges.map(edge => edge.node),
}))(CaseStudiesPage);

export const caseStudiesFragment = graphql`
  query CaseStudiesPageData {
    allCaseStudiesYaml {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
