import BaseLink, { activeClassName } from 'components/Link';
import styled from 'styled-components';

import { highlight, textLight, textOnDark } from 'styles/colours';
import { spacing } from 'styles/spacing';

const paddedRight = (a, b) => props => (props.padRight ? a : b);

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Link = styled(BaseLink)`
  color: ${textLight};
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 400;
  padding-bottom: ${spacing()};
  padding-left: ${spacing(1.5)};
  padding-right: ${paddedRight(spacing(3), spacing(1.5))};
  padding-top: ${spacing()};
  position: relative;
  text-decoration: none;

  &:after {
    bottom: 0;
    background-color: ${highlight};
    content: '';
    display: none;
    height: 2px;
    left: ${spacing(1.5)};
    position: absolute;
    width: calc(100% - ${paddedRight(spacing(4.5), spacing(3))};);
  }

  &:hover {
    text-decoration: none;
  }

  &:hover:after,
  &.${activeClassName}:after {
    display: block;
  }
`;

export const ButtonLink = Link.extend`
  background-color: ${highlight};
  border-radius: 1px;
  color: ${textOnDark};
  padding: ${spacing(1.3)} ${spacing(3)};

  &:hover:after {
    display: none;
  }
`;
