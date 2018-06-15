import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Link from 'gatsby-link';
import remcalc from 'remcalc';
import is from 'styled-is';

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
`;
