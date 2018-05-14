import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
`;

const BlogPost = ({ title, content, authors }) => (
  <Fragment>
    <Title>{title}</Title>
    <Markdown source={content} />
    <p>{authors.map(author => author.name)}</p>
  </Fragment>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BlogPost;

export const fragment = graphql`
  fragment BlogPostFrontmatter on Posts {
    title
    content
    authors {
      name
      avatar {
        url
      }
    }
  }
`;
