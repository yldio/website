import React from 'react';
import PropTypes from 'prop-types';

import { H4, Copy } from 'components/Typography';
import { Container } from './styled';

const Subservice = ({ children, name }) => (
  <Container>
    <H4>{name}</H4>
    <Copy>{children}</Copy>
  </Container>
);

Subservice.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired
};

Subservice.defaultProps = {
  children: []
};

export default Subservice;
