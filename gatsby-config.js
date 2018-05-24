module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'case-studies',
        path: `${__dirname}/data/case-studies/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/data/config/`,
      },
    },
  ],
};
