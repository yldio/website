import styled from 'styled-components';

import { gridWidth, gridColWidth } from '../../styles/spacing';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${gridColWidth}px;
  max-width: ${gridWidth + gridColWidth}px;
`;

export default Container;
