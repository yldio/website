const path = require('path');

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
    results.data.allCaseStudiesYaml.edges.map(edge => edge.node),
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
          config.templates.caseStudy.component,
        ),
        context: {
          slug: caseStudy.slug,
        },
      });
    });

    return Promise.resolve();
  });
}

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return getConfiguration(graphql).then(config =>
    createCaseStudyPages(graphql, createPage, config),
  );
};
