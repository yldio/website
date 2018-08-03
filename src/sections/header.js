import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';

import Logo from 'components/logo';
import { Copy } from 'components/typography';

const Ul = styled.ul`
  list-style: none;
`;

const Li = Copy.withComponent('li').extend`
  display: inline;
  margin-right: ${remcalc(20)};
  font-size: ${remcalc(12)};

  ${breakpoint('sm')`
    margin-left: ${remcalc(45)};
    font-size: ${remcalc(18)};
  `};

  ${breakpoint('md')`
    font-size: ${remcalc(18)};
    margin-right: ${remcalc(10)};
  `}
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
  position: relative;

  ${breakpoint('md')`
    flex-direction: row;
    align-items: center;
  `};
`;

const Link = styled(BaseLink)`
  color: ${props => props.theme.colors.white};
  display: inline-block;
  position: relative;
  text-decoration: none;

  &:after {
    background-color: rgba(255, 255, 255, 0.5);
    content: '';
    opacity: 0;
    height: ${remcalc(2)};
    width: ${remcalc(50)};
    display: block;
    position: absolute;
    left: calc(50% - ${remcalc(25)});
    bottom: ${remcalc(-2)};
  }

  &:hover {
    text-decoration: none;
  }
  &:hover:after,
  &.${props => props.activeClassName}:after {
    opacity: 1;
  }
`;

const Container = styled.header`
  padding-left: ${remcalc(32)};
  padding-right: ${remcalc(32)};
  padding-top: ${remcalc(32)};
  padding-bottom: ${remcalc(32)};
  max-width: ${remcalc(1280)};
  margin: 0 auto;
`;

export default () => (
  <Container data-selector="header">
    <Wrapper justifyBetween alignCenter>
      <FlexItem>
        <Logo fill="white" />
      </FlexItem>
      <FlexItem>
        <nav>
          <Ul>
            <Li>
              <Link activeClassName="__active" to="/" exact>
                Home
              </Link>
            </Li>
            <Li>
              <Link activeClassName="__active" to="/services" exact>
                Services
              </Link>
            </Li>
            <Li>
              <Link activeClassName="__active" to="/our-clients" exact>
                Our Clients
              </Link>
            </Li>
            <Li>
              <Link activeClassName="__active" to="/community" exact>
                Community
              </Link>
            </Li>
            <Li>
              <Link activeClassName="__active" to="/about-us" exact>
                About Us
              </Link>
            </Li>
          </Ul>
        </nav>
      </FlexItem>
    </Wrapper>
  </Container>
);
