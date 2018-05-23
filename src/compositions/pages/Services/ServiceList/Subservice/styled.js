import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { textLight, textLighter } from 'styles/colours';

export const Container = styled.section`
  margin-bottom: ${spacing(6)};
`;

export const Title = styled.h4`
  color: ${textLight};
  font-size: 1.375rem;
  font-weight: 500;
  margin: ${spacing(2)} 0;
`;

export const Body = styled.p`
  font-size: 1.25rem;
  color: ${textLighter};
  margin: ${spacing(2)} 0;
  line-height: 1.6em;
`;
