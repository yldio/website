import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Markdown from 'react-markdown';

const Container = styled.main`
  margin: 3em auto;
  max-width: 1080px;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const BlogPostTemplate = ({ data: { post } }) => {
  const { title, content, authors } = post;

  return (
    <Container>
      <Title>{title}</Title>
      <Markdown source={content} />
      <p>{authors.map(author => author.name)}</p>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPostTemplate;

export const query = graphql`
  query getPost($slug: String!) {
    post: posts(slug: { eq: $slug }) {
      title
      content
      authors {
        name
        avatar {
          url
        }
      }
    }
  }
`;
