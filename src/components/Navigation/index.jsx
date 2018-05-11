import React from 'react';
import { Link, LastLink, SecondLastLink, List, Item } from './styled';

export default function Navigation() {
  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/services">Services</Link>
      </Item>
      <Item>
        <Link to="/our-approach">Our Approach</Link>
      </Item>
      <Item>
        <Link to="/community">Community</Link>
      </Item>
      <Item>
        <SecondLastLink to="/about-us">About Us</SecondLastLink>
      </Item>
      <Item>
        <LastLink to="/join-us">Join Us</LastLink>
      </Item>
    </List>
  );
}
