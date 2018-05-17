import styled from 'styled-components';

import { gridWidth, gridColWidth } from '../../styles/spacing';

const maxWidth = {
  normal: `${gridWidth + gridColWidth}px`,
  wide: `${gridWidth * 1.5 + gridColWidth}px`,
};

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${gridColWidth}px;
  max-width: ${props => (props.wide ? maxWidth.wide : maxWidth.normal)};
`;
