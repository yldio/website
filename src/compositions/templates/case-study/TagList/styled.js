import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { highlight } from 'styles/colours';

export const List = styled.ul`
  list-style-type: none;
  margin: ${spacing(3)} 0 0 0;
  padding: 0;
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
    margin-right: 0;
  }
`;
