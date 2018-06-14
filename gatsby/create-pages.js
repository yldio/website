const path = require('path');
const queryBlogPosts = require('./queryBlogPosts');
const appConfig = require('../src/config');

const CONFIG_NAME = process.env.GATSBY_CONFIG || 'default';

const replaceSlug = base => slug => base.replace('#slug', slug);

function getConfiguration(graphql) {
  return graphql(`
    {
      configYaml(name: { eq: "${CONFIG_NAME}" }) {
        templates {
          caseStudy {
            path
            component
          }
          blogPost {
            path
            component
          }
        }
      }
    }
  `).then(result => result.data.configYaml);
}

function getCaseStudies(graphql) {
  return graphql(`
    {
      allCaseStudiesYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(results =>
    results.data.allCaseStudiesYaml.edges.map(edge => edge.node)
  );
}

function createCaseStudyPages(graphql, createPage, config) {
  const getPath = replaceSlug(config.templates.caseStudy.path);

  return getCaseStudies(graphql).then(caseStudies => {
    caseStudies.forEach(caseStudy => {
      createPage({
        path: getPath(caseStudy.slug),
        component: path.resolve(
          __dirname,
          '../src/',
          config.templates.caseStudy.component
        ),
        context: {
          slug: caseStudy.slug
        }
      });
    });

    return Promise.resolve();
  });
}

function createBlogPostPages(graphql, createPage, config) {
  return graphql(queryBlogPosts).then(result => {
    if (result.errors) return Promise.reject(new Error(result.errors));
    const getPath = replaceSlug(config.templates.blogPost.path);

    const blogPosts = result.data.allContentfulPost.edges;

    blogPosts.forEach(({ node: post }) => {
      const pageConfig = {
        path: getPath(post.slug),
        component: path.resolve(
          __dirname,
          '../src/',
          config.templates.blogPost.component
        ),
        context: {
          slug: post.slug
        }
      };

      createPage(pageConfig);
    });

    return Promise.resolve();
  });
}

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return getConfiguration(graphql).then(config => {
    const promises = [createCaseStudyPages(graphql, createPage, config)];

    if (appConfig.get('development'))
      promises.push(createBlogPostPages(graphql, createPage, config));

    return Promise.all(promises);
  });
};
