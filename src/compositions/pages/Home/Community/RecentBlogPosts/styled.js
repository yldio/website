import styled from 'styled-components';
import { textLight } from 'styles/colours';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const BlogPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${spacing(-1.25)};
  margin-bottom: ${spacing(6.25)};
`;

export const BlogPost = styled.li`
  display: block;
  padding: ${spacing(1.25)};
  width: 100%;

  ${breakpoints.tablet`
    width: 50%;
  `};
`;

export const Title = styled.h3`
  color: ${textLight};
  font-weight: 500;
  font-size: 2.25rem;
  margin-bottom: ${spacing(5)};
`;
