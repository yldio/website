import styled from 'styled-components';
import is from 'styled-is';

export default styled.section`
  background-color: ${props => props.theme.colors.white};
  position: relative;
  display: block;

  ${is('dark')`
    background-color: ${props => props.theme.colors.midnightblue};
  `};

  ${is('blue')`
    background-color: ${props => props.theme.colors.slateblue};
  `};
`;
