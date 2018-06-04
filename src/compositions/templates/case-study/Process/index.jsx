import React from 'react';
import PropTypes from 'prop-types';

import PageSection from 'components/PageSection';
import { Copy, H2 } from 'components/Typography';

const Process = ({ top, main }) => (
  <PageSection>
    <H2>The Process</H2>
    <Copy large>{top}</Copy>
    <Copy newLines>{main}</Copy>
  </PageSection>
);

Process.propTypes = {
  main: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
};

export default Process;
