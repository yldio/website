/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const queryBlogPosts = require('./gatsby/queryBlogPosts');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const templates = {
    blogPost: path.resolve('./src/templates/blog-post.jsx'),
  };

  return graphql(queryBlogPosts).then(result => {
    if (result.errors) return Promise.reject(new Error(result.errors));

    const blogPosts = result.data.allPosts.edges;

    blogPosts.forEach(({ node: post }) => {
      const pageConfig = {
        path: `blog/${post.slug}`,
        component: templates.blogPost,
        context: {
          slug: post.slug,
        },
      };

      createPage(pageConfig);
    });

    return Promise.resolve();
  });
};
