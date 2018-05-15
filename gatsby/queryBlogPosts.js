module.exports = `
{
  allContentfulPost {
    edges {
      node {
        slug
        author {
          name
        }
        title {
          title
        }
        body {
          body
        }
      }
    }
  }
}
`;
