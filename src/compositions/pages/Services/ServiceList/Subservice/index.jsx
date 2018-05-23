import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Body } from './styled';

const Subservice = ({ children, name }) => (
  <Container>
    <Title>{name}</Title>
    <Body>{children}</Body>
  </Container>
);

Subservice.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
};

Subservice.defaultProps = {
  children: [],
};

export default Subservice;
