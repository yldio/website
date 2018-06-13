import React from 'react';
import PropTypes from 'prop-types';
import { InternalLink, StyledLink } from './styled';

const internalRegExp = /^\/(?!\/)/;
export const isInternal = href => internalRegExp.test(href);

export const activeClassName = '___active';

const Link = ({ activeClassName: ac, href, ...props }) => {
  if (isInternal(href))
    return <InternalLink exact to={href} activeClassName={ac} {...props} />;

  return <StyledLink href={href} {...props} />;
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  activeClassName,
};

export default Link;
