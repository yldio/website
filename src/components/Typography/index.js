import styled from 'styled-components';
import { textLight, textLighter } from 'styles/colours';
import { spacing } from 'styles/spacing';

const base = styled.span`
  white-space: ${props => (props.newLines ? 'pre-line' : 'normal')};
`;

export const H1 = styled.h1`
  color: ${textLight};
  font-size: 3rem;
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(3)};
`;

export const H2 = styled.h2`
  color: ${textLight};
  font-weight: 500;
  font-size: 2.25rem;
  margin-top: ${spacing(3)};
  margin-bottom: ${spacing(3)};
`;

export const H4 = styled.h4`
  color: ${textLight};
  font-size: 1.375rem;
  font-weight: 500;
  margin-top: ${spacing(2)};
  margin-bottom: ${spacing(2)};
`;

export const Copy = base.withComponent('p').extend`
  color: ${textLighter};
  font-size: ${props => (props.large ? '1.5rem' : '1.25rem')};
  font-weight: ${props => (props.large ? 300 : 400)};
  line-height: 1.6em;
  margin-top: ${props => (props.large ? spacing(4) : spacing(2))};
  margin-bottom: ${props => (props.large ? spacing(4) : spacing(2))};
`;
