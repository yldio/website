import React from 'react';
import Metric from 'components/Metric';
import PropTypes from 'prop-types';

import { Grid } from './styled';

const MetricGrid = ({ content }) => (
  <Grid>
    {content &&
      content.map((metric, i) => (
        <Metric key={i} {...metric} max={content.length} />
      ))}
  </Grid>
);

MetricGrid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape(Metric.propTypes)).isRequired,
};

export default MetricGrid;
