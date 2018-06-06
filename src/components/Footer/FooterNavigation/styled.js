import styled from 'styled-components';

import DefaultLink from 'components/Link';
import { footerText } from 'styles/colours';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const Category = styled.ul`
  padding: ${spacing(2)};
  width: 50%;

  ${breakpoints.tablet`
    width: 25%;
  `};
`;

export const Item = styled.li`
  color: ${props => (props.header ? 'FFFFFF' : footerText)};
  margin-bottom: ${props => (props.header ? spacing(2) : spacing())};
  font-size: 1.125rem;
  font-weight: ${props => (props.header ? 500 : 400)};
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin: ${spacing(5)} -${spacing(2)};
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};
  font-weight: 400;
`;
