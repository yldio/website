import styled from 'styled-components';
import { textLighter, textLight, textGreen } from 'styles/colours';

export const Item = styled.li``;
export const Parameter = styled.p`
  margin: 20px 0;
  color: ${textLighter};
  font-size: 1.25rem;
  white-space: pre-line;
`;

export const Value = styled.h4`
  color: ${textLight};
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 0;
`;

export const Change = styled.div`
  color: ${textGreen};
  font-size: 1.2rem;
`;
