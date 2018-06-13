import styled from 'styled-components';
import { highlight, text, textBlue } from 'styles/colours';
import { spacing } from 'styles/spacing';
import is from 'styled-is';
import remcalc from 'remcalc';

const base = styled.span`
  white-space: ${props => (props.newLines ? 'pre-line' : 'normal')};
`;

export const H1 = styled.h1`
  color: ${text};
  line-height: 85px;
  font-size: 72pt;
  font-weight: 900;

  ${is('light')`
    color: #b4afc8;
  `};

  ${is('lighter')`
    color: #ffffff;
  `};
`;

export const H2 = styled.h2`
  color: ${text};
  line-height: 52px;
  font-size: 38pt;
  font-weight: 400;
  position: relative;

  ${is('decorated')`
    &:after {
      bottom: 0;
      background-color: ${highlight};
      content: '';
      opacity: 1;
      height: 4px;
      left: 0;
      bottom: -25px;
      position: absolute;
      transition: opacity 200ms;
      width: 100px;
    }

    margin-bottom: 65px;
  `};

  ${is('light')`
    color: #b4afc8;
  `};

  ${is('lighter')`
    color: #ffffff;
  `};
`;

export const H4 = styled.h4`
  color: ${text};
  line-height: 43px;
  font-size: 28pt;
  font-weight: 400;
  position: relative;

  ${is('light')`
    color: #b4afc8;
  `};

  ${is('lighter')`
    color: #ffffff;
  `};

  ${is('decorated')`
    &:after {
      bottom: 0;
      background-color: ${highlight};
      content: '';
      opacity: 1;
      height: 4px;
      left: 0;
      bottom: -25px;
      position: absolute;
      transition: opacity 200ms;
      width: 100px;

      ${is('center')`
        left: calc(50% - 50px);
      `};
    }
  `};
`;

export const H5 = styled.h5`
  font-size: 1.375rem;
  font-weight: 400;
  margin-top: ${spacing(2)};
  margin-bottom: ${spacing(2)};
  font-size: ${remcalc(27)};
  color: ${textBlue};

  ${is('light')`
    color: #b4afc8;
  `};

  ${is('lighter')`
    color: #ffffff;
  `};
`;

export const Copy = base.withComponent('p').extend`
  color: ${text};
  font-weight: 400;
  line-height: 31px;
  font-size: 18pt;

  ${is('light')`
    color: #b4afc8;
  `};

  ${is('lighter')`
    color: #ffffff;
  `};

  ${is('uppercase')`
    text-transform: uppercase;
  `};
`;
