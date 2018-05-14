const config = new Map();

/*
  Allows us to flag things to only show up for development environments
  (very basic feature flipping)
  see https://www.netlify.com/docs/continuous-deployment/#build-environment-variables
  for explanation of process.env.CONTEXT
*/

config.set('development', process.env.GATSBY_CONTEXT !== 'production');

export default {
  get: k => config.get(k),
};
