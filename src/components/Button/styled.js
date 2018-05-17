import styled from 'styled-components';
import { highlight, textOnDark } from '../../styles/colours';

export const withButtonStyles = Component => styled(Component)`
  background: ${highlight};
  color: ${textOnDark};
  display: inline-block;
  font-size: 1.125em;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  min-width: 10em;
  padding: 20px;
`;
