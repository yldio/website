import styled from 'styled-components';

import DefaultLink from 'components/Link';
import { footerText } from 'styles/colours';
import { spacing } from 'styles/spacing';

export const Item = styled.li`
  color: #ffffff;
  margin-bottom: ${props => (props.header ? spacing(2) : spacing())};
  font-size: 1.125rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};
  font-weight: 400;
`;
