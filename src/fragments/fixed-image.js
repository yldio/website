const defaultOptions = {
  imageFragment: 'GatsbyImageSharpResolutions',
  imageQuery: 'childImageSharp',
  imageWidth: null,
};

const requireOptions = (keys, options) => {
  keys.forEach(key => {
    if (!options[key])
      throw new Error(
        `options.${key} must be provided for images to be optimised`,
      );
  });
};

const required = ['imageWidth'];

export default function fixedImageFragment(opts = {}) {
  const options = Object.assign({}, defaultOptions, opts);

  requireOptions(required, options);

  return `
    ${options.imageQuery} {
      resolutions(width: ${options.imageWidth}) {
        ...${options.imageFragment}
      }
    }
  `;
}
