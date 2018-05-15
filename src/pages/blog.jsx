import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import { propTypes as blogPostPropTypes } from '../components/BlogPost';

const BlogPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  return (
    <ul>
      {posts.map(({ node: post }) => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}`}>{post.title.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allPosts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape(blogPostPropTypes).isRequired,
        }),
      ),
    }),
  }),
};

BlogPage.defaultProps = {
  data: {
    allPosts: {
      edges: [],
    },
  },
};

export const query = graphql`
  query AllBlogPostsQuery {
    allContentfulPost {
      edges {
        node {
          slug
          ...BlogPostFrontmatter
        }
      }
    }
  }
`;
