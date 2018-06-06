import React from 'react';
import PropTypes from 'prop-types';
import TileGrid, { Tile } from 'components/TileGrid';
import GatsbyImage from 'gatsby-image';

import {
  Section,
  TileContent,
  TileContentTitle,
  TileContentBody,
  Right,
  Left,
} from './styled';

const RelatedCaseStudies = ({ caseStudies }) => {
  const tiles = caseStudies.map((caseStudy, index) => {
    const colour = index === 1 ? 'lightGreen' : 'normal';

    return (
      <Tile key={caseStudy.client} colour={colour}>
        <TileContent>
          <Left>
            <header>
              <TileContentTitle>Related Case Studies</TileContentTitle>
              <GatsbyImage
                alt="client logo"
                {...caseStudy.clientLogo.childImageSharp}
              />
            </header>
            <TileContentBody>{caseStudy.description}</TileContentBody>
          </Left>
          <Right>
            <GatsbyImage
              alt="application image"
              {...caseStudy.clientAppImage.childImageSharp}
            />
          </Right>
        </TileContent>
      </Tile>
    );
  });

  return (
    <Section wide>
      <TileGrid>{tiles}</TileGrid>
    </Section>
  );
};

RelatedCaseStudies.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      clientLogo: PropTypes.shape({
        childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired,
      }).isRequired,
      clientAppImage: PropTypes.shape({
        childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default RelatedCaseStudies;
