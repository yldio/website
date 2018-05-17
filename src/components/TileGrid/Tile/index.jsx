import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, ContentTitle, ContentBody } from './styled';

const Tile = ({ children, colour, title }) => (
  <Container colour={colour}>
    <Content>
      <ContentTitle>{title}</ContentTitle>
      <ContentBody>{children}</ContentBody>
    </Content>
  </Container>
);

Tile.propTypes = {
  colour: PropTypes.oneOf(['normal', 'dark', 'darker']),
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

Tile.defaultProps = {
  colour: 'normal',
};

export default Tile;
