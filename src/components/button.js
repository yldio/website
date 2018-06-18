import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import remcalc from 'remcalc';
import is from 'styled-is';
import React from 'react';

import GatsbyLink from 'gatsby-link';

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

export default styled(Link)`
  background: transparent;
  color: ${props => props.theme.colors.midnightblue};
  border: solid ${remcalc(2)} ${props => props.theme.colors.midnightblue};
  border-radius: ${remcalc(33)};
  height: ${remcalc(50)};
  padding: ${remcalc(10)} ${remcalc(40)};
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;

  text-decoration: none;
  line-height: ${remcalc(25)};
  font-size: ${remcalc(18)};
  font-weight: 400;

  ${is('white')`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.slateblue};
    border-color: ${props => props.theme.colors.white};
  `};

  ${is('transparent')`
    background-color: transparent;
    color: ${props => props.theme.colors.white};
  `};

  ${breakpoint('md')`
    width: inherit;
    text-align: inherit;
  `};

  ${is('background')`
    background-color: ${props => props.theme.colors[props.background]};;
  `};

  ${is('color')`
    color: ${props => props.theme.colors[props.color]};;
  `};

  ${is('border')`
    border-color: ${props => props.theme.colors[props.border]};;
  `};
`;
