import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import { Copy } from 'components/Typography';
import PageSection from 'components/PageSection';

import { QuoteWrapper, Quote, Author, Position, Container } from './styled';

const CustomerQuote = ({
  image,
  imageAlt,
  quote,
  author,
  position,
  subDescription,
  clientAppImage,
  clientAppImageAlt
}) => (
  <Fragment>
    <PageSection wide>
      <GatsbyImage alt={imageAlt} {...image.childImageSharp} />
      <Container>
        <QuoteWrapper>
          <Quote>{quote}</Quote>
          <Author>{author}</Author>
          <Position>{position}</Position>
        </QuoteWrapper>
      </Container>
    </PageSection>
    <PageSection>
      <Copy newLines>{subDescription}</Copy>
    </PageSection>
    <PageSection wide>
      <GatsbyImage
        alt={clientAppImageAlt}
        {...clientAppImage.childImageSharp}
      />
    </PageSection>
  </Fragment>
);

CustomerQuote.propTypes = {
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired
  }).isRequired,
  imageAlt: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  subDescription: PropTypes.string.isRequired,
  clientAppImage: PropTypes.shape({
    childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired
  }).isRequired,
  clientAppImageAlt: PropTypes.string.isRequired
};

export default CustomerQuote;
