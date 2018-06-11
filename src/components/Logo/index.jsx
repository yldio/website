import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import logoWhite from './logo-white.svg';
import { LogoImage } from './styled';

export default function Logo({ dark }) {
  return (
    <Link data-selector="component:logo" to="/">
      <LogoImage src={dark ? logoWhite : logo} alt="YLD Logo" />
    </Link>
  );
}
Logo.propTypes = {
  dark: PropTypes.bool,
};

Logo.defaultProps = {
  dark: false,
};
