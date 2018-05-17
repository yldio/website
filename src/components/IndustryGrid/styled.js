import styled from 'styled-components';
import { text, textLighter } from '../../styles/colours';
import { spacing } from '../../styles/spacing';
import breakpoints from '../../styles/breakpoints';

export const Item = styled.li`
  padding: ${spacing()};
  width: 100%;

  ${breakpoints.tablet`
    width: 50%;
  `};

  ${breakpoints.desktop`
    width: ${100 / 3}%;
  `};
`;

export const Body = styled.div`
  background: white;
  border: 1px solid #e4e8ef;
  border-radius: 3px;
  padding: ${spacing(2)};
`;

export const Title = styled.h6`
  color: ${text};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`;

export const Content = styled.p`
  color: ${textLighter};
  font-size: 1.125rem;
  margin: 0;
`;

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: ${spacing(-1)};
  padding: 0;
`;
