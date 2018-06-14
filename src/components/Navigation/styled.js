import BaseLink, { activeClassName } from 'components/Link';
import styled from 'styled-components';
import is from 'styled-is';
import breakpoints from 'styles/breakpoints';

import { highlight, textLight } from 'styles/colours';
import { spacing } from 'styles/spacing';

const paddedRight = (a, b) => props => (props.padRight ? a : b);

export const Item = styled.li`
  display: inline-block;

  &:first-child a {
    padding-left: 0;
  }

  &:last-child a {
    padding-right: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  ${breakpoints.tablet`
    display: block;
  `};
`;

export const Link = styled(BaseLink)`
  color: #ffffff;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 400;
  padding-bottom: ${spacing()};
  padding-left: ${spacing(2.3)};
  padding-right: ${paddedRight(spacing(3), spacing(2.3))};
  padding-top: ${spacing()};
  position: relative;
  text-decoration: none;

  ${is('dark')`
    color: white;
  `};

  &:after {
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
    content: '';
    opacity: 0;
    height: 2px;
    left: ${spacing(1.5)};
    position: absolute;
    transition: opacity 200ms;
    width: calc(100% - ${paddedRight(spacing(4.5), spacing(3))});

    ${is('dark')`
      background-color: white;
    `};
  }

  &:hover {
    text-decoration: none;
  }

  &:hover:after,
  &.${activeClassName}:after {
    opacity: 1;
  }
`;

// export const ButtonLink = Link.extend`
//   background-color: ${highlight};
//   border-radius: 1px;
//   color: ${textOnDark};
//   padding: ${spacing(1.3)} ${spacing(3)};

//   &:hover:after {
//     display: none;
//   }
// `;
