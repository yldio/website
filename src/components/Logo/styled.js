import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

export const YLD = styled.h1`
  color: #111;
  font-weight: bold;
  margin: 0;
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;
