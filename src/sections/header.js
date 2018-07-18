import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';

import Logo from 'components/logo';
import { Copy } from 'components/typography';

import ArrowLeft from 'assets/arrow-left.png';
import ArrowRight from 'assets/arrow-right.png';

const Ul = styled.ul`
  list-style: none;
`;

const Li = Copy.withComponent('li').extend`
  display: inline;
  margin-right: ${remcalc(20)};

  ${breakpoint('sm')`
    margin-left: ${remcalc(45)};
  `};
`;

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
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

const Nav = styled.nav`
  overflow: auto;
  white-space: nowrap;
  position: relative;
`;

const ArrowIcon = styled.img`
  width: 50%;
`;

const ButtonLeft = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
  width: 38px;

  ${breakpoint('lg')`
  display: none;
  `};
`;

const ButtonRight = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  transition: opacity 0.3s;
  width: 38px;

  ${breakpoint('lg')`
      display: none;
  `};
`;

export default () => (
  <Container data-selector="header">
    <Wrapper justifyBetween alignCenter>
      <FlexItem>
        <Logo fill="white" />
      </FlexItem>
      <FlexItem>
        <Nav>
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
        </Nav>
      </FlexItem>
      <ButtonLeft>
        <ArrowIcon src={ArrowLeft} />
      </ButtonLeft>
      <ButtonRight>
        <ArrowIcon src={ArrowRight} />
      </ButtonRight>
    </Wrapper>
  </Container>
);
