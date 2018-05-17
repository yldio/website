import styled from 'styled-components';

import { gridColWidth, gridWidth } from '../../styles/spacing';
import { text, textLight } from '../../styles/colours';

export const Container = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  color: ${text};
  font-size: 3.75rem;
  font-weight: 500;
  margin: 0;
  margin-right: ${gridColWidth / 2}px;
`;

export const Description = styled.p`
  color: ${textLight};
  font-size: 1.25rem;
  line-height: 1.55;
  margin: 0;
  max-width: ${gridWidth * 1 / 2}px;
`;
