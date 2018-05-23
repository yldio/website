import React from 'react';
import PropTypes from 'prop-types';
import { BaseGradient } from './styled';

const Gradient = ({ height, ...props }) => (
  <BaseGradient height={height} {...props} />
);

Gradient.propTypes = {
  height: PropTypes.string,
};

Gradient.defaultProps = {
  height: '50%',
};

export default Gradient;
