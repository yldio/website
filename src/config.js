const config = new Map();

/*
  Any GATSBY_* variables are available here by default
*/

/*
  Allows us to flag things to only show up for development environments
  (very basic feature flipping)
  See netlify.toml for where GATSBY_CONTEXT comes from
*/

config.set('development', process.env.GATSBY_CONTEXT !== 'production');

module.exports = {
  get: k => config.get(k)
};
