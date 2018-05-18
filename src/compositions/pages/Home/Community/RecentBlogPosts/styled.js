import styled from 'styled-components';
import { textLight } from '../../../../../styles/colours';
import { spacing } from '../../../../../styles/spacing';
import breakpoints from '../../../../../styles/breakpoints';

export const BlogPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: ${spacing(-1.5)};
  margin-bottom: ${spacing(6.5)};
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

export const Title = styled.h3`
  color: ${textLight};
  font-weight: 500;
  font-size: 2.25rem;
  margin-top: 0;
  margin-bottom: ${spacing(4)};
`;
