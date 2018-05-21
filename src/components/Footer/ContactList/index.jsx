import React from 'react';

import { Contact, Line, Link, List, Office } from './styled';

const ContactList = () => (
  <List>
    <Contact>
      <address>
        <Office>London</Office>
        <Line>124 Aldersgate Street</Line>
        <Line>EC1A 4JQ</Line>
        <Line>
          <Link href="tel:+44-203-514-4678">+44 (0) 203 514 4678</Link>
        </Line>
        <Line>
          <Link href="mailto:hello@yld.io">hello@yld.io</Link>
        </Line>
      </address>
    </Contact>
    <Contact>
      <address>
        <Office>Lisbon</Office>
        <Line>Rua Ramalho Ortigão 8</Line>
        <Line>3rd floor left</Line>
        <Line>1070-230</Line>
      </address>
    </Contact>
    <Contact>
      <address>
        <Office>Porto</Office>
        <Line>124 Aldersgate Street</Line>
        <Line>EC1A 4JQ</Line>
        <Line>1070-230</Line>
      </address>
    </Contact>
  </List>
);

export default ContactList;
