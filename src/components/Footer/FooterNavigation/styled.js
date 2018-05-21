import styled from 'styled-components';

import DefaultLink from 'components/Link';
import { footerText } from 'styles/colours';
import { spacing } from 'styles/spacing';

export const Category = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
`;

export const Item = styled.li`
  color: ${props => (props.header ? 'FFFFFF' : footerText)};
  margin-bottom: ${spacing()};
  margin-top: 0;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${props => (props.header ? 500 : 400)};
`;

export const Nav = styled.nav`
  display: flex;
  margin: ${spacing(5)} 0;
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};
  font-weight: 400;
`;
