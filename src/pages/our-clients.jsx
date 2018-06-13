import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { mapProps } from 'recompose';

import Link from 'components/Link';
import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const CaseStudiesPage = ({ caseStudies, page }) => (
  <Fragment>
    <Helmet title={page.title} meta={page.metadata} />
    <PageSection>
      <PageSectionHeader title="Our Clients" />
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
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    metadata: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        content: PropTypes.string
      })
    ).isRequired
  }).isRequired,
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default mapProps(props => ({
  page: props.data.contentfulPage,
  caseStudies: props.data.allCaseStudiesYaml.edges.map(edge => edge.node)
}))(CaseStudiesPage);

export const caseStudiesFragment = graphql`
  query CaseStudiespage {
    contentfulPage(identifier: { eq: "case-studies" }) {
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
