import styled from 'styled-components';
import { textLight, textLighter } from 'styles/colours';

export const H1 = styled.h1`
  color: ${textLight};
  font-size: 3rem;
`;

export const H2 = styled.h2`
  color: ${textLight};
  font-size: 2.25rem;
`;

export const Copy = styled.p`
  color: ${textLighter};
  font-size: ${props => (props.large ? '1.5rem' : '1.25rem')};
  font-weight: ${props => (props.large ? 300 : 400)};
`;
