import styled from 'styled-components';
import { textLight, textLighter, textBlue, blue } from 'styles/colours';
import { spacing } from 'styles/spacing';
import is from 'styled-is';
import remcalc from 'remcalc';

const base = styled.span`
  white-space: ${props => (props.newLines ? 'pre-line' : 'normal')};
`;

export const H1 = styled.h1`
  color: ${textLight};
  font-size: 3rem;
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(3)};

  ${is('white')`
    color: white;
  `};
`;

export const H2 = styled.h2`
  color: ${textLight};
  font-weight: 500;
  font-size: 2.25rem;
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(3)};

  ${is('white')`
    color: white;
  `};

  ${is('slim')`
    font-weight: 400;
  `};
`;

export const H4 = styled.h4`
  color: ${textLight};
  font-size: 1.375rem;
  font-weight: 500;
  margin-top: ${spacing(2)};
  margin-bottom: ${spacing(2)};

  ${is('white')`
    color: white;
  `};
`;

export const H5 = styled.h5`
  font-size: 1.375rem;
  font-weight: 400;
  margin-top: ${spacing(2)};
  margin-bottom: ${spacing(2)};
  font-size: ${remcalc(27)};
  color: ${textBlue};

  &:after {
    content: '';
    display: block;
    background: ${blue};
    width: ${remcalc(100)};
    height: ${remcalc(4)};
    margin-top: ${remcalc(10)};
  }

  ${is('white')`
    color: white;
  `};
`;

export const Copy = base.withComponent('p').extend`
  color: ${textLighter};
  font-size: ${props => (props.large ? '1.5rem' : '1.25rem')};
  font-weight: ${props => {
    if (props.large || props.light) return 300;

    return props.bold ? 600 : 400;
  }}
  line-height: 1.6em;
  margin-top: ${props => (props.large ? spacing(4) : spacing(2))};
  margin-bottom: ${props => (props.large ? spacing(4) : spacing(2))};

  ${is('light')`
    color: #B4AFC8;
  `};

  ${is('white')`
    color: white;
  `};

  ${is('uppercase')`
    text-transform: uppercase;
  `};
`;
