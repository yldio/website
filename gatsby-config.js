require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        query: `{
          allPosts {
            id
            title
            slug
            content
            authors {
              name
              avatar {
                url
              }
            }
          }
        }`,
      },
    },
  ],
};
