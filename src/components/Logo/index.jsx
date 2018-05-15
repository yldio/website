import React from 'react';
import { YLD, Link } from './styled';
import logo from './logo.svg';

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} />
    </Link>
  );
}
