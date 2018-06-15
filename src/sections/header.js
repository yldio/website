import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import styled from 'styled-components';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';
import is from 'styled-is';

import Logo from 'components/logo';
import { Copy } from 'components/typography';

const Ul = styled.ul`
  list-style: none;
`;

const Li = Copy.withComponent('li').extend`
  display: inline;
  margin-left: ${remcalc(45)};
`;

const Link = styled(BaseLink)`
  color: ${props => props.theme.colors.midnightblue};
  display: inline-block;
  position: relative;
  text-decoration: none;

  ${is('dark')`
    color: ${props => props.theme.colors.white};
  `};
`;

const Container = styled.header`
  padding-left: ${remcalc(32)};
  padding-right: ${remcalc(32)};
  padding-top: ${remcalc(32)};
  padding-bottom: ${remcalc(32)};
  max-width: ${remcalc(1280)};
  margin: 0 auto;
`;

export default ({ dark = false }) => (
  <Container>
    <Flex justifyBetween alignCenter>
      <FlexItem>
        <Logo fill={dark ? 'white' : 'midnightblue'} />
      </FlexItem>
      <FlexItem>
        <nav>
          <Ul>
            <Li>
              <Link dark={dark} to="/">
                Home
              </Link>
            </Li>
            <Li>
              <Link dark={dark} to="/services">
                Services
              </Link>
            </Li>
            <Li>
              <Link dark={dark} to="/our-clients">
                Our Clients
              </Link>
            </Li>
            <Li>
              <Link dark={dark} to="/about-us">
                About Us
              </Link>
            </Li>
          </Ul>
        </nav>
      </FlexItem>
    </Flex>
  </Container>
);
