import React from 'react';

import { Container, StyledFooter } from './styled';

import ContactList from './ContactList';

const Footer = () => (
  <StyledFooter>
    <Container>
      <ContactList />
    </Container>
  </StyledFooter>
);

export default Footer;
