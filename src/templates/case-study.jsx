import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import styled from 'styled-components';

import fixedImage from 'fragments/fixed-image';
import PageHero from 'components/PageHero';
import PageSection from 'components/PageSection';
import TagList from 'compositions/templates/case-study/TagList';

const HeroImage = styled.img`
  width: 100%;
`;

const CaseStudyTemplate = ({
  heroImage,
  shortDescription,
  tags,
  title,
  pageTitle,
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
      <HeroImage src={heroImage} />
    </PageSection>
  </Fragment>
);

CaseStudyTemplate.propTypes = {
  heroImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default mapProps(props => ({
  ...props.data.caseStudiesYaml,
  heroImage: props.data.caseStudiesYaml.heroImage.childImageSharp.original.src,
}))(CaseStudyTemplate);

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    caseStudiesYaml(slug: { eq: $slug }) {
      title
      pageTitle
      tags
      shortDescription
      heroImage {
        ${fixedImage({ imageWidth: 1230 })}
      }
    }
  }
`;
