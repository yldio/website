import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';

const Container = ({ wide }) => <StyledContainer wide={wide} />;

Container.propTypes = {
  wide: PropTypes.bool,
};

Container.defaultProps = {
  wide: false,
};

export default Container;
