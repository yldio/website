import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import GatsbyImage from 'gatsby-image';

import PageHero from 'components/PageHero';
import PageSection from 'components/PageSection';
import Process from 'compositions/templates/case-study/Process';
import TagList from 'compositions/templates/case-study/TagList';
import Success from 'compositions/templates/case-study/Success';
import MetricGrid from 'compositions/templates/case-study/MetricGrid';
import CustomerQuote from 'compositions/templates/case-study/CustomerQuote';

const CaseStudyTemplate = ({
  heroImage,
  heroImageAlt,
  shortDescription,
  tags,
  title,
  pageTitle,
  quote,
  process,
  success,
  metrics,
}) => (
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
    <PageSection wide>
      <GatsbyImage alt={heroImageAlt} {...heroImage.childImageSharp} />
    </PageSection>
    <CustomerQuote {...quote} />
    <Process {...process} />
    <PageSection>
      <Success {...success} />
    </PageSection>
    <PageSection>
      <MetricGrid metrics={metrics} />
    </PageSection>
  </Fragment>
);
CaseStudyTemplate.propTypes = {
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  success: PropTypes.objectOf(PropTypes.string).isRequired,
  metrics: PropTypes.shape(MetricGrid.propTypes).isRequired,
  quote: PropTypes.shape(CustomerQuote.propTypes).isRequired,
  process: PropTypes.shape(Process.propTypes).isRequired,
};

export default mapProps(props => props.data.caseStudiesYaml)(CaseStudyTemplate);

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudiesYaml(slug: { eq: $slug }) {
      title
      pageTitle
      tags
      shortDescription
      heroImage {
        childImageSharp {
          sizes(quality: 75, maxWidth: 1280) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      heroImageAlt
      quote {
        image {
          childImageSharp {
            sizes(quality: 75, maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        imageAlt
        quote
        position
        author
        subDescription
        clientAppImage {
          childImageSharp {
            sizes(quality: 75, maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        clientAppImageAlt
      }
      success {
        main
        sub
      }
      metrics {
        parameter
        value
        change
      process {
        main
        top
        image {
          childImageSharp {
            sizes(quality: 75, maxWidth: 1280) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        imageAlt
      }
    }
  }
`;
