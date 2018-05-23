import styled from 'styled-components';
import { highlight } from 'styles/colours';
import GatsbyLink from 'gatsby-link';

export const StyledLink = styled.a`
  color: ${highlight};
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const InternalLink = StyledLink.withComponent(GatsbyLink);
