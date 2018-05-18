import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

import { highlight, textLight, textOnDark } from '../../styles/colours';
import { spacing } from '../../styles/spacing';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Link = styled(GatsbyLink)`
  color: ${textLight};
  display: inline-block;
  font-size: 18px;
  padding: ${spacing()} ${spacing(1.5)};
  position: relative;
  text-decoration: none;

  &:hover:after {
    bottom: 0;
    content: '';
    background-color: ${highlight};
    height: 2px;
    left: ${spacing(1.5)};
    position: absolute;
    width: calc(100% - ${spacing(3)});
  }
`;

export const SecondLastLink = Link.extend`
  padding-right: ${spacing(3)};

  &:hover:after {
    width: calc(100% - ${spacing(4.5)});
  }
`;

export const LastLink = Link.extend`
  background-color: ${highlight};
  border: 1px solid #ddd;
  border-radius: 1px;
  color: ${textOnDark};
  padding: ${spacing(1.3)} ${spacing(3)};

  &:hover:after {
    display: none;
  }
`;
