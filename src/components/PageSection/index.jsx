import React from 'react';
import PropTypes from 'prop-types';

import Gradient from 'components/Gradient';
import { Section } from './styled';

const PageSection = ({ children, gradient, gradientHeight, ...props }) => (
  <Section gradient={gradient} {...props}>
    {children}
    {gradient && <Gradient height={gradientHeight} />}
  </Section>
);

PageSection.propTypes = {
  children: PropTypes.node,
  gradient: PropTypes.bool,
  gradientHeight: PropTypes.string,
};

PageSection.defaultProps = {
  children: [],
  gradient: false,
  gradientHeight: '50%',
};

export default PageSection;
