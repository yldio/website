import styled from 'styled-components';

import { gridColWidth, gridWidth, spacing } from 'styles/spacing';
import { textLight, textLighter } from 'styles/colours';

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${spacing(6)};
`;

export const Title = styled.h2`
  color: ${textLight};
  font-size: 3.75rem;
  font-weight: 500;
  margin-right: ${gridColWidth / 2}px;
`;

export const Description = styled.p`
  color: ${textLighter};
  font-size: 1.25rem;
  line-height: 1.55;
  max-width: ${gridWidth * 1 / 2}px;
`;
