import React from 'react';
import PropTypes from 'prop-types';
import { Link, Item } from './styled';

const Navigation = ({ dark }) => (
  <nav data-selector="component:navigation">
    <ul>
      <Item>
        <Link dark={dark} href="/">
          Home
        </Link>
      </Item>
      <Item>
        <Link dark={dark} href="/services">
          Services
        </Link>
      </Item>
      <Item>
        <Link dark={dark} href="/our-clients">
          Our Clients
        </Link>
      </Item>
      {/* <Item>
        <Link dark={dark} href="/community">
          Community
        </Link>
      </Item> */}
      <Item>
        <Link dark={dark} padRight href="/about-us">
          About Us
        </Link>
      </Item>
      {/* <Item>
        <ButtonLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://jobs.lever.co/yld"
        >
          Join Us
        </ButtonLink>
      </Item> */}
    </ul>
  </nav>
);

export default Navigation;

Navigation.propTypes = {
  dark: PropTypes.bool,
};

Navigation.defaultProps = {
  dark: false,
};
