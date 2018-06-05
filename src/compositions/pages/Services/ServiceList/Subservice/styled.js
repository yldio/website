import styled from 'styled-components';
import { spacing } from 'styles/spacing';

export const Container = styled.section`
  margin-bottom: ${spacing(6)};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
