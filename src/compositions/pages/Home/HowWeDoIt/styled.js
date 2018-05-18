import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { highlight } from '../../../../styles/colours';
import { spacing } from '../../../../styles/spacing';

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

export const ProductListWrapper = styled.div`
  margin-left: ${spacing(-4)};
  margin-right: ${spacing(-4)};
`;
