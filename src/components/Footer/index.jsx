import React from 'react';

import { Container, StyledFooter } from './styled';

import FooterContactList from './FooterContactList';
import FooterNavigation from './FooterNavigation';
import FooterClosing from './FooterClosing';

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterContactList />
      <FooterNavigation />
      <FooterClosing />
    </Container>
  </StyledFooter>
);

export default Footer;
