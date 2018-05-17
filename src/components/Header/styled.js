import styled from 'styled-components';
import { gridColWidth } from '../../styles/spacing';

export const Wrapper = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px ${gridColWidth / 2}px;
  align-items: center;
`;
