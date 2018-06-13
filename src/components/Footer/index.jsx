import React from 'react';

import { Container, StyledFooter } from './styled';

import FooterNavigation from './FooterNavigation';
import FooterClosing from './FooterClosing';

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterNavigation />
      <FooterClosing />
    </Container>
  </StyledFooter>
);

export default Footer;
