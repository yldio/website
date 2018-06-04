import React from 'react';
import Metric from 'components/Metric';
import PropTypes from 'prop-types';

import { Grid } from './styled';

const MetricGrid = ({ metrics }) => (
  <Grid>{metrics.map(metric => <Metric {...metric} />)}</Grid>
);

MetricGrid.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.shape(Metric.propTypes)),
};
MetricGrid.defaultProps = {
  metrics: [],
};

export default MetricGrid;
