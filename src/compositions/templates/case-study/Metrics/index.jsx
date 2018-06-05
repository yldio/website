import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Copy, H2 } from 'components/Typography';
import PageSection from 'components/PageSection';
import MetricGrid from '../MetricGrid/index';

const Metrics = ({ sub, main, content }) => (
  <Fragment>
    <PageSection>
      <H2>Metrics</H2>
      <Copy large>{main}</Copy>
      <Copy newLines>{sub}</Copy>
    </PageSection>
    <PageSection>
      <MetricGrid content={content} />
    </PageSection>
  </Fragment>
);

Metrics.propTypes = {
  sub: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      parameter: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      change: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Metrics;
