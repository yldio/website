import React from 'react';

import { Nav, Category, Item, Link } from './styled';

const Navigation = () => (
  <Nav>
    <Category>
      <Item title>What we do</Item>
      <Item>
        <Link href="/services">Services</Link>
      </Item>
      <Item>
        <Link href="/our-approach">Our Approach</Link>
      </Item>
      <Item>
        <Link href="#how-we-do-it">How we do it</Link>
      </Item>
    </Category>
    <Category>
      <Item title>Our work</Item>
      <Item>
        <Link href="/case-studies">Case Studies</Link>
      </Item>
      <Item>
        <Link href="/industries">Industries</Link>
      </Item>
    </Category>
    <Category>
      <Item title>Who we are</Item>
      <Item>
        <Link href="/about-us">About Us</Link>
      </Item>
      <Item>
        <Link href="/join-us">Join Us</Link>
      </Item>
    </Category>
    <Category>
      <Item title>Our Community</Item>
      <Item>
        <Link href="/talks">Talks</Link>
      </Item>
      <Item>
        <Link href="/events">Events</Link>
      </Item>
      <Item>
        <Link href="/blog">Blog</Link>
      </Item>
    </Category>
  </Nav>
);

export default Navigation;
