import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';
import { Wrapper } from './styled';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  );
}
