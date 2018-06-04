import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import {
  SubDescription,
  QuoteWrapper,
  Quote,
  Author,
  Position,
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
  <div>
    <div>
      <GatsbyImage alt={quotesImageAlt} {...quotesImage.childImageSharp} />
      <QuoteWrapper>
        <Quote>{quotes}</Quote>
        <Author>{quoteAuthor}</Author>
        <Position>{quotePosition}</Position>
      </QuoteWrapper>
    </div>
    <SubDescription>{subDescription}</SubDescription>
    <GatsbyImage alt={clientAppImageAlt} {...clientAppImage.childImageSharp} />
  </div>
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
