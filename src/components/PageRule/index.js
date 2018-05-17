import styled from 'styled-components';
import { borderLight } from '../../styles/colours';
import { spacing } from '../../styles/spacing';

const PageRule = styled.hr`
  background-color: ${borderLight};
  border: none;
  height: 1px;
  margin: ${spacing(10)} 0;
  width: 100%;
`;

export default PageRule;
