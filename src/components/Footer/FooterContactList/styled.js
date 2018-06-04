import styled from 'styled-components';

import DefaultLink from 'components/Link';
import { footerText } from 'styles/colours';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const Contact = styled.li`
  padding: ${spacing(2)};
  width: 50%;

  ${breakpoints.tablet`
    margin-bottom: 0;
    width: ${100 / 3}%;
  `};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -${spacing(2)};
`;

export const Line = styled.p`
  margin-bottom: ${spacing()};
  font-size: 1.125rem;
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};
  font-weight: 400;
`;

export const Office = Line.withComponent('h6').extend`
  font-weight: 500;
  margin-bottom: ${spacing(2)};
`;
