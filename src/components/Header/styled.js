import styled from 'styled-components';
import { gridColWidth } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  align-items: flex-start;
  position: relative;
  z-index: 2;
  flex-direction: column;
  padding-top: 30px;

  ${breakpoints.tablet`
    flex-direction: row;
    align-items: center;
    margin: 0 ${gridColWidth / 2}px;
  `};
`;
