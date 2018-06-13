import React from 'react';
import PropTypes from 'prop-types';
import { Item, Parameter, Value, Change, Image } from './styled';
import increment from './increment.svg';
import decrement from './decrement.svg';

const Metric = ({ parameter, value, change }) => {
  const positive = change.charAt(0) !== '-';
  return (
    <Item>
      <header>
        <Parameter>{parameter}</Parameter>
        <Value>{value}</Value>
      </header>
      <Change positive={positive}>
        {positive ? (
          <Image src={increment} alt="change of the value" />
        ) : (
          <Image src={decrement} red alt="change of the value" />
        )}
        {change}
      </Change>
    </Item>
  );
};

Metric.propTypes = {
  parameter: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired
};

export default Metric;
