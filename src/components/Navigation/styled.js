import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

import { text } from '../../styles/colours';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Link = styled(GatsbyLink)`
  color: ${text};
  display: inline-block;
  font-size: 1.1em;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SecondLastLink = Link.extend`
  padding-right: 30px;
`;

export const LastLink = Link.extend`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 30px;
`;
