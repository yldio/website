import styled from 'styled-components';
import { textLight } from 'styles/colours';
import { gridWidth, spacing } from 'styles/spacing';

export const DefaultTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${textLight};
  line-height: 1em;
  margin-bottom: ${spacing(2)};
  margin-top: ${spacing(4)};
`;

export const Main = styled.main`
  color: ${textLight};
  font-size: 1.25rem;
  line-height: 2em;
  max-width: ${gridWidth * 2 / 3}px;
`;
