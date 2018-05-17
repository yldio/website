import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, ContentTitle, ContentBody } from './styled';

const Tile = ({ colour }) => (
  <Container colour={colour}>
    <Content>
      <ContentTitle>hello</ContentTitle>
      <ContentBody>hello, world! i represent some tiled content</ContentBody>
    </Content>
  </Container>
);

Tile.propTypes = {
  colour: PropTypes.oneOf(['normal', 'dark', 'darker']),
};

Tile.defaultProps = {
  colour: 'normal',
};

export default Tile;
