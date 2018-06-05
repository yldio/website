import React from 'react';
import PropTypes from 'prop-types';
import { Item, Parameter, Value, Change, Image } from './styled';
import increment from './increment.svg';
import decrement from './decrement.svg';

const Metric = ({ parameter, value, change }) => {
  const changeLogo = +change.slice(0, change.length - 1) > 0 ? 'inc' : 'dec';
  return (
    <Item>
      <Parameter>{parameter}</Parameter>
      <Value>{value}</Value>
      <Change changeLogo={changeLogo}>
        {changeLogo === 'inc' && (
          <Image src={increment} alt="change of the value" />
        )}
        {changeLogo === 'dec' && (
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
  change: PropTypes.string.isRequired,
};

export default Metric;
