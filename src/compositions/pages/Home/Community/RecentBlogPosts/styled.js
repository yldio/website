import styled from 'styled-components';
import { spacing } from '../../../../../styles/spacing';
import breakpoints from '../../../../../styles/breakpoints';

export const BlogPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: ${spacing(-1.5)};
  padding: 0;
`;

export const BlogPost = styled.li`
  display: block;
  padding: ${spacing(1.5)};
  width: 100%;

  ${breakpoints.tablet`
    width: 50%;
  `};
`;
