import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import GatsbyImage from 'gatsby-image';

import { Copy, H2 } from 'components/Typography';
import PageHero from 'components/PageHero';
import PageSection from 'components/PageSection';
import TagList from 'compositions/templates/case-study/TagList';
import Success from 'compositions/templates/case-study/Success';

const CaseStudyTemplate = ({
  heroImage,
  heroImageAlt,
  shortDescription,
  tags,
  title,
  pageTitle,
  success,
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
    <PageSection>
      <H2>The Process</H2>
      <Copy large>
        We help you future proof your business though a new style of consulting,
        ground up. We connect and educate engineering, product and leadership to
        help you navigate digital transformation, grow your business and tackle
        core customer problems. We’re one of the most renowned technology
        companies in Europe.
      </Copy>
      <Copy>
        Some amazing support copy with go here to reenforce whatever section it
        is relevant too. Some amazing support copy with go here to reenforce
        whatever section it is relevant too. Some amazing support copy with go
        here to reenforce whatever section it is relevant too. Some amazing
        support copy with go here to reenforce whatever section it is relevant
        too. Some amazing support copy with go here to reenforce whatever
        section it is relevant too.
      </Copy>
      <Copy>
        Some amazing support copy with go here to reenforce whatever section it
        is relevant too. Some amazing support copy with go here to reenforce
        whatever section it is relevant too. Some amazing support copy with go
        here to reenforce whatever section it is relevant too. Some amazing
        support copy with go here to reenforce whatever section it is relevant
        too. Some amazing support copy with go here to reenforce whatever
        section it is relevant too.
      </Copy>
    </PageSection>
    <PageSection>
      <Success {...success} />
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
      success {
        main
        sub
      }
    }
  }
`;
