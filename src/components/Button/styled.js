import styled from 'styled-components';
import { highlight } from 'styles/colours';
import is from 'styled-is';

export const withButtonStyles = Component => styled(Component)`
  background: #ffffff;
  color: ${highlight};
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: none;
  min-width: 10em;
  min-height: 50px;
  padding: 15px;
  border-radius: 50px;

  ${is('transparent')`
    background: transparent;
    color: #ffffff;
    border: solid 2px #ffffff;
  `};
`;
