import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const Grid = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;

  ${breakpoints.tablet`
    grid-template-columns: 1fr 1fr;
  `};
  ${breakpoints.desktop`
    grid-template-columns: repeat(3, 1fr);
  `};
`;
