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
import CustomerQuote from 'compositions/templates/case-study/CustomerQuote';
import Metrics from 'compositions/templates/case-study/Metrics';

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
    <Process {...process} />
    <CustomerQuote {...quote} />
    <PageSection>
      <Success {...success} />
    </PageSection>
    <Metrics {...metrics} />
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
  quote: PropTypes.shape(CustomerQuote.propTypes).isRequired,
  process: PropTypes.shape(Process.propTypes).isRequired,
  metrics: PropTypes.shape(Metrics.propTypes).isRequired,
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
        main
        sub
        content {
          parameter
          value
          change
        }
      }
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
