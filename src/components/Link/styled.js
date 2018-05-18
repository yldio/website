import styled from 'styled-components';
import { highlight } from '../../styles/colours';

export const StyledLink = styled.a`
  color: ${highlight};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
