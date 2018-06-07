import styled from 'styled-components';
import { spacing } from 'styles/spacing';

export const People = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: ${spacing(6)};
`;
