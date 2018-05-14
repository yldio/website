module.exports = `
  {
    allPosts {
      edges {
        node {
          slug
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
    }
  }
`;
