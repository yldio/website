import styled, { css } from 'styled-components';

import is from 'styled-is';
import remcalc from 'remcalc';

const color = css`
  ${is('white')`
    color: ${props => props.theme.colors.thistle};
  `};

  ${is('whiter')`
    color: ${props => props.theme.colors.white};
  `};
`;

const weight = css`
  ${is('bold')`
    font-weight: 900;
  `};

  ${is('light')`
    font-weight: 400;
  `};
`;

const alignment = css`
  text-align: left;

  ${is('right')`
    text-align: right;
  `};

  ${is('center')`
    text-align: center;
  `};

  ${is('justify')`
    text-align: justify;
  `};
`;

export const H1 = styled.h1`
  color: ${props => props.theme.colors.midnightblue};
  line-height: ${remcalc(80)};
  font-size: ${remcalc(72)};
  font-weight: 900;
  position: relative;

  ${color};
  ${weight};
  ${alignment};
`;

export const H2 = styled.h2`
  color: ${props => props.theme.colors.midnightblue};
  line-height: ${remcalc(72)};
  font-size: ${remcalc(60)};
  font-weight: 900;
  position: relative;

  ${color};
  ${weight};
  ${alignment};
`;

export const H3 = styled.h3`
  color: ${props => props.theme.colors.midnightblue};
  line-height: ${remcalc(50)};
  font-size: ${remcalc(36)};
  font-weight: 400;
  position: relative;
  margin-bottom: ${remcalc(25)};

  ${color};
  ${weight};
  ${alignment};

  ${is('decorated')`
    &:after {
      background-color: ${props => props.theme.colors.slateblue};
      content: '';
      height: ${remcalc(4)};
      width: ${remcalc(100)};
      display: block;
      margin-top: ${remcalc(25)};
      position: relative;
    }

    ${is('center')`
      &:after {
        left: calc(50% - 50px);
        position: absolute;
      }
    `};
  `};
`;

export const H4 = styled.h4`
  color: ${props => props.theme.colors.midnightblue};
  line-height: ${remcalc(43)};
  font-size: ${remcalc(28)};
  font-weight: 400;
  position: relative;

  ${color};
  ${weight};
  ${alignment};

  ${is('decorated')`
    &:after {
      background-color: ${props => props.theme.colors.slateblue};
      content: '';
      height: ${remcalc(4)};
      width: ${remcalc(100)};
      display: block;
      margin-top: ${remcalc(25)};
      position: relative;
    }

    ${is('center')`
      &:after {
        left: calc(50% - 50px);
        position: absolute;
      }
    `};
  `};
`;

export const H5 = styled.h5`
  color: ${props => props.theme.colors.slateblue};
  line-height: ${remcalc(31)};
  font-size: ${remcalc(18)};
  font-weight: 400;
  position: relative;
  text-transform: uppercase;

  ${color};
  ${weight};
  ${alignment};
`;

export const Copy = styled.p`
  color: ${props => props.theme.colors.darkslategrey};
  line-height: ${remcalc(31)};
  font-size: ${remcalc(18)};
  font-weight: 400;
  position: relative;

  ${color};
  ${weight};
  ${alignment};
`;
