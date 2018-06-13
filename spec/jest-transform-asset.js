/*
  This is a Jest transformer which converts an asset into a module that simply
  exports its path. Useful when testing code that requires assets.
  Add any required file extensions to jest.config.js
*/

module.exports = {
  process: (src, path) => {
    const assetPath = path.slice(path.lastIndexOf('/src'));
    return `module.exports = "${assetPath}"`;
  }
};
