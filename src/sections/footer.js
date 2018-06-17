import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding } from 'styled-components-spacing';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';

import { H4, Copy } from 'components/typography';
import Section from 'components/section';
import { Margin } from 'styled-components-spacing/dist/cjs/Margin';

const ListLink = Copy.withComponent(BaseLink).extend`
  display: block;
  color: ${props => props.theme.colors.thistle};
  text-decoration: none;
  margin-top: ${remcalc(15)};
`;

const Link = Copy.withComponent(BaseLink).extend`
  font-size: ${remcalc(16)};
  line-height: ${remcalc(33)};
  text-decoration: none;
  margin-left: ${remcalc(15)};
`;

export default () => (
  <Section dark>
    <Grid>
      <Padding top={{ xs: 15, md: 26 }} bottom={{ xs: 15, md: 36 }}>
        <Row between="xs">
          <Col xs={6}>
            <H4 whiter>Contact</H4>
            <ListLink to="mailto:hello@yld.io">hello@yld.io</ListLink>
            <ListLink to="tel:+4402035144678">
              UK: +44 (0) 203 514 4678
            </ListLink>
            <ListLink to="tel:+351210000000">
              Portugal: +351 21 000 0000
            </ListLink>
          </Col>
          <Col xs={6} md={3}>
            <H4 whiter>Get Around</H4>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/services">Services</ListLink>
            <ListLink to="/our-clients">Our Clients</ListLink>
            <ListLink to="/about-us">About Us</ListLink>
            <ListLink to="/join-us">Join Us</ListLink>
          </Col>
          <Col xs={6} md={3}>
            <H4 whiter>Follow Us</H4>
            <ListLink to="https://twitter.com/yldio">Twitter</ListLink>
            <ListLink to="https://github.com/yldio">Github</ListLink>
            <ListLink to="https://youtube.com">Youtube</ListLink>
          </Col>
        </Row>
      </Padding>
      <Margin bottom={15} inline>
        <Copy white>
          © 2018 Made with love by YLD. All rights reservered
          <Link white to="/privacy-policy">
            Privacy
          </Link>
          <Link white to="/terms">
            Terms
          </Link>
          <Link white to="/sitemap">
            Sitemap
          </Link>
        </Copy>
      </Margin>
    </Grid>
  </Section>
);
