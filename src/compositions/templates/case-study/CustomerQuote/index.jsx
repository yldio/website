import React from 'react';
import PageSection from 'components/PageSection';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import {
  SubDescription,
  QuoteWrapper,
  Quote,
  Author,
  Position,
  Container,
} from './styled';

const CustomerQuote = ({
  quotesImage,
  quotesImageAlt,
  quotes,
  quoteAuthor,
  quotePosition,
  subDescription,
  clientAppImage,
  clientAppImageAlt,
}) => (
  <PageSection wide>
    <GatsbyImage alt={quotesImageAlt} {...quotesImage.childImageSharp} />
    <Container>
      <QuoteWrapper>
        <Quote>{quotes}</Quote>
        <Author>{quoteAuthor}</Author>
        <Position>{quotePosition}</Position>
      </QuoteWrapper>
    </Container>
    <PageSection>
      <SubDescription>{subDescription}</SubDescription>
    </PageSection>
    <GatsbyImage alt={clientAppImageAlt} {...clientAppImage.childImageSharp} />
  </PageSection>
);

CustomerQuote.propTypes = {
  quotesImage: PropTypes.shape({
    childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired,
  }).isRequired,
  quotesImageAlt: PropTypes.string.isRequired,
  quotes: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
  quotePosition: PropTypes.string.isRequired,
  subDescription: PropTypes.string.isRequired,
  clientAppImage: PropTypes.shape({
    childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired,
  }).isRequired,
  clientAppImageAlt: PropTypes.string.isRequired,
};

export default CustomerQuote;
