import GatsbyLink from 'gatsby-link';
import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styled';

const internalRegExp = /^\/(?!\/)/;
export const isInternal = href => internalRegExp.test(href);

const InternalLink = StyledLink.withComponent(GatsbyLink);

const Link = ({ href, ...props }) => {
  if (isInternal(href)) return <InternalLink to={href} {...props} />;

  return <StyledLink href={href} {...props} />;
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
};

export default Link;
