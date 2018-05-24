import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Tag = styled.li`
  display: inline-block;
  margin-right: 1em;

  &:after {
    content: ',';
  }

  &:last-child {
    margin-right: 0;
  }
`;
