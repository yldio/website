import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
`;

const BlogPost = ({ title, body, author }) => (
  <Fragment>
    <Title>{title.title}</Title>
    <Markdown source={body.body} />
    <p>{author.name}</p>
  </Fragment>
);

BlogPost.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;

export const fragment = graphql`
  fragment BlogPostFrontmatter on ContentfulPost {
    title {
      title
    }
    body {
      body
    }
    author {
      name
    }
  }
`;
