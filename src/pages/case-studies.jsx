import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import Link from 'components/Link';
import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const CaseStudiesPage = ({ caseStudies, metadata }) => (
  <Fragment>
    <Helmet title={metadata.title} meta={metadata.metadata} />
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
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default mapProps(props => ({
  metadata: props.data.metadata,
  caseStudies: props.data.allCaseStudiesYaml.edges.map(edge => edge.node),
}))(CaseStudiesPage);

export const caseStudiesFragment = graphql`
  query CaseStudiesPageData {
    metadata: metadataYaml(identifier: { eq: "case-studies" }) {
      title
      metadata {
        name
        content
      }
    }
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
