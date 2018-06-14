import styled from 'styled-components';

import is from 'styled-is';
import remcalc from 'remcalc';

export const H1 = styled.h1`
  color: ${props => props.theme.midnightblue};
  line-height: ${remcalc(80)};
  font-size: ${remcalc(72)};
  font-weight: 900;
  position: relative;

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};
`;

export const H2 = styled.h2`
  color: ${props => props.theme.midnightblue};
  line-height: ${remcalc(72)};
  font-size: ${remcalc(60)};
  font-weight: 900;
  position: relative;

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};
`;

export const H3 = styled.h3`
  color: ${props => props.theme.midnightblue};
  line-height: ${remcalc(50)};
  font-size: ${remcalc(36)};
  font-weight: 400;
  position: relative;
  margin-bottom: ${remcalc(25)};

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};

  ${is('decorated')`
    &:after {
      background-color: ${props => props.theme.slateblue};
      content: '';
      height: ${remcalc(4)};
      width: ${remcalc(100)};
      display: block;
      margin-top: ${remcalc(25)};
    }
  `};
`;

export const H4 = styled.h4`
  color: ${props => props.theme.midnightblue};
  line-height: ${remcalc(43)};
  font-size: ${remcalc(28)};
  font-weight: 400;
  position: relative;

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};
`;

export const H5 = styled.h5`
  color: ${props => props.theme.slateblue};
  line-height: ${remcalc(31)};
  font-size: ${remcalc(18)};
  font-weight: 400;
  position: relative;
  text-transform: uppercase;

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};
`;

export const Copy = styled.p`
  color: ${props => props.theme.darkslategrey};
  line-height: ${remcalc(31)};
  font-size: ${remcalc(18)};
  font-weight: 400;
  position: relative;

  ${is('light')`
    color: ${props => props.theme.thistle};
  `};

  ${is('lighter')`
    color: ${props => props.theme.white};
  `};

  ${is('bold')`
    font-weight: 900;
  `};
`;
