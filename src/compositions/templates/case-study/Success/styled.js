import styled from 'styled-components';
import { textLighter, textLight } from 'styles/colours';

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  margin: 30px 0;
  color: ${textLight};
`;

export const Main = styled.p`
  margin: 30px 0;
  color: ${textLighter};
  font-size: 1.5rem;
  font-weight: 300;
  white-space: pre-line;
  font-weight: 300;
`;

export const Sub = styled.p`
  margin: 20px 0;
  color: ${textLighter};
  font-size: 1.25rem;
  white-space: pre-line;
  font-weight: 300;
`;
