import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './styled';

const PageSection = ({ children, ...props }) => (
  <Section {...props}>{children}</Section>
);

PageSection.propTypes = {
  children: PropTypes.node
};

PageSection.defaultProps = {
  children: []
};

export default PageSection;
