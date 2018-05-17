import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description } from './styled';

const PageSectionHeader = ({ description, title }) => (
  <Container>
    <Title>{title}</Title>
    {description ? <Description>{description}</Description> : null}
  </Container>
);

PageSectionHeader.propTypes = {
  description: PropTypes.node,
  title: PropTypes.string.isRequired,
};

PageSectionHeader.defaultProps = {
  description: null,
};

export default PageSectionHeader;
