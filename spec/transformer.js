module.exports = require('babel-jest').createTransformer({
  plugins: ['gatsby/dist/utils/babel-plugin-extract-graphql'],
});
