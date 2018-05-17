import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';

const Container = ({ children, wide }) => (
  <StyledContainer wide={wide}>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  wide: false,
};

export default Container;
