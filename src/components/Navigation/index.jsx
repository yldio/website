import React from 'react';
import { Link, ButtonLink, List, Item } from './styled';

export default function Navigation() {
  return (
    <nav data-selector="component:navigation">
      <List>
        <Item>
          <Link href="/case-studies">Case Studies</Link>
        </Item>
        <Item>
          <Link href="/services">Services</Link>
        </Item>
        <Item>
          <Link href="/community">Community</Link>
        </Item>
        <Item>
          <Link padRight href="/about-us">
            About Us
          </Link>
        </Item>
        <Item>
          <ButtonLink href="/join-us">Join Us</ButtonLink>
        </Item>
      </List>
    </nav>
  );
}
