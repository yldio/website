import React from 'react';

import { Container, StyledFooter } from './styled';

import ContactList from './FooterContactList';
import Navigation from './FooterNavigation';

const Footer = () => (
  <StyledFooter>
    <Container>
      <ContactList />
      <Navigation />
    </Container>
  </StyledFooter>
);

export default Footer;
