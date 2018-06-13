import React from 'react';
import { H5 } from 'components/Typography';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Nav, Category, Item, Link, Contact } from './styled';

const FooterNavigation = () => (
  <Nav>
    <Grid>
      <Row>
        <Col xs={4}>
          <ul>
            <H5 lighter>Contact</H5>
            <Item>
              <Link href="mailto:hello@yld.io">hello@yld.io</Link>
            </Item>
            <Item>
              <Link href="tel:+4402035144678">+44 (0) 203 514 4678</Link>
            </Item>
          </ul>
        </Col>
        <Col xs={4}>
          <ul>
            <H5 lighter>Get Around</H5>
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
          </ul>
        </Col>
        <Col xs={4}>
          <ul>
            <H5 lighter>Follow Us</H5>
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
          </ul>
        </Col>
      </Row>
    </Grid>
  </Nav>
);

export default FooterNavigation;
