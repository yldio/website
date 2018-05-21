import styled from 'styled-components';

import { gridWidth, gridWidthWide, gridColWidth } from 'styles/spacing';

const maxWidth = {
  normal: `${gridWidth + gridColWidth}px`,
  wide: `${gridWidthWide}px`,
};

const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => (props.wide ? 0 : gridColWidth / 2)}px;
  max-width: ${props => (props.wide ? maxWidth.wide : maxWidth.normal)};
`;

export default Container;
