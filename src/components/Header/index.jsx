import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { Wrapper } from './styled';

export default function Header({ dark }) {
  return (
    <Wrapper>
      <Logo dark={dark} />
      <Navigation dark={dark} />
    </Wrapper>
  );
}

Header.propTypes = {
  dark: PropTypes.bool
};

Header.defaultProps = {
  dark: false
};
