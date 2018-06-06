import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { highlight } from 'styles/colours';

export const List = styled.ul`
  margin-top: ${spacing(3)};
`;

export const Tag = styled.li`
  color: ${highlight};
  display: inline-block;
  padding-right: ${spacing()};

  &:after {
    content: ',';
  }

  &:last-child:after {
    display: none;
  }

  &:last-child {
    padding-right: 0;
  }
`;
