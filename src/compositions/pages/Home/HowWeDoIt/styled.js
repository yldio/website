import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { highlight } from '../../../../styles/colours';

export const Description = styled.span`
  display: block;
  margin-bottom: 1em;
`;

export const Link = styled(GatsbyLink)`
  color: ${highlight};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
