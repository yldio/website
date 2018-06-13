import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogPost from '../components/BlogPost';

const Container = styled.main`
  margin: 3em auto;
  max-width: 1080px;
`;

const BlogPostTemplate = ({ data }) => (
  <Container>
    <BlogPost {...data.post} />
  </Container>
);

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape(BlogPost.propTypes)
  }).isRequired
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...BlogPostFrontmatter
    }
  }
`;
