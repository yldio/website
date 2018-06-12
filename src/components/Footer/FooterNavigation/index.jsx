import React from 'react';
import { H5 } from 'components/Typography';

import { Nav, Category, Item, Link, Contact } from './styled';

const FooterNavigation = () => (
  <Nav>
    <Contact>
      <H5 white noBorder>
        Contact
      </H5>
      <Item>
        <Link href="mailto:hello@yld.io">hello@yld.io</Link>
      </Item>
      <Item>
        <Link href="tel:+4402035144678">+44 (0) 203 514 4678</Link>
      </Item>
    </Contact>
    <Category>
      <H5 white noBorder>
        Get Around
      </H5>
      <Item>
        <Link href="/">Home</Link>
      </Item>
      <Item>
        <Link href="/services">Services</Link>
      </Item>
      <Item>
        <Link href="/our-clients">Our Clients</Link>
      </Item>
      <Item>
        <Link href="/about-us">About Us</Link>
      </Item>
      <Item>
        <Link href="/join-us">Join Us</Link>
      </Item>
    </Category>
    <Category>
      <H5 white noBorder>
        Folow Us
      </H5>
      <ul>
        <Item>
          <Link href="https://twitter.com/yldio">Twitter</Link>
        </Item>
        <Item>
          <Link href="https://github.com/yldio">Github</Link>
        </Item>
        <Item>
          <Link href="https://youtube.com">Youtube</Link>
        </Item>
      </ul>
    </Category>
  </Nav>
);

export default FooterNavigation;
