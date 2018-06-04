import React from 'react';
import PropTypes from 'prop-types';
import { Item, Parameter, Value, Change } from './styled';

const Metric = ({ parameter, value, change }) => (
  <Item>
    <Parameter>{parameter}</Parameter>
    <Value>{value}</Value>
    <Change>{change}</Change>
  </Item>
);

Metric.propTypes = {
  parameter: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};

export default Metric;
