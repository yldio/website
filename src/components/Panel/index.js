import styled from 'styled-components';
import { spacing } from '../../styles/spacing';

export const panelPadding = spacing(3);

const Panel = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 20px rgba(161, 160, 197, 0.2);
  padding: ${panelPadding};
`;

export default Panel;
