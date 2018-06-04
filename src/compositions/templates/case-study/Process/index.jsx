import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import PageSection from 'components/PageSection';
import { Copy, H2 } from 'components/Typography';

const Process = ({ image, imageAlt, top, main }) => (
  <Fragment>
    <PageSection>
      <H2>The Process</H2>
      <Copy large>{top}</Copy>
      <Copy newLines>{main}</Copy>
    </PageSection>
    <PageSection wide>
      <GatsbyImage {...image.childImageSharp} alt={imageAlt} />
    </PageSection>
  </Fragment>
);

Process.propTypes = {
  main: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  image: PropTypes.shape({
    childImageSharp: PropTypes.shape(GatsbyImage.propTypes).isRequired,
  }).isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Process;
