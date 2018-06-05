import styled from 'styled-components';
import { highlight, textOnDark } from 'styles/colours';

export const withButtonStyles = Component => styled(Component)`
  background: ${highlight};
  box-shadow: 0 25px 30px 5px rgba(88, 86, 214, 0.2);
  color: ${textOnDark};
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: none;
  min-width: 10em;
  padding: 20px;
`;
