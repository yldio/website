import styled from 'styled-components';
import { textLight } from 'styles/colours';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const Events = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: ${spacing(-1.25)};
  margin-bottom: ${spacing(6.25)};
  padding: 0;
`;

export const Event = styled.li`
  display: block;
  padding: ${spacing(1.25)};
  width: 100%;

  ${breakpoints.tablet`
    width: 50%;
  `};

  ${breakpoints.desktop`
    width: ${100 / 3}%;
  `};
`;

export const Title = styled.h3`
  color: ${textLight};
  font-weight: 500;
  font-size: 2.25rem;
  margin-top: 0;
  margin-bottom: ${spacing(5)};
`;
