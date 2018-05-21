import React from 'react';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import { Wrapper } from './styled';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
}
