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
          <Col xs={12} md={6} lg={4}>
            <Padding bottom={{ xs: 15 }}>
              <H4 whiter>Contact</H4>
              <ListLink to="mailto:hello@yld.io">hello@yld.io</ListLink>
              <ListLink to="tel:+4402035144678">
                UK: +44 (0) 203 514 4678
              </ListLink>
              <ListLink to="tel:+351211356149">
                Portugal: +351 211 356 149
              </ListLink>
            </Padding>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Padding bottom={{ xs: 15 }}>
              <H4 whiter>Get Around</H4>
              <Row>
                <Col xs={6} md={6} lg={12}>
                  <ListLink to="/">Home</ListLink>
                  <ListLink to="/services">Services</ListLink>

                  <ListLink to="/our-clients">Our Clients</ListLink>
                </Col>
                <Col xs={6} md={6} lg={12}>
                  <ListLink to="/about-us">About Us</ListLink>
                  <ListLink to="/join-us">Join Us</ListLink>
                </Col>
              </Row>
            </Padding>
          </Col>

          <Col xs={12} md={12} lg={4}>
            <H4 whiter>Follow Us</H4>
            <Row>
              <Col xs={4} md={2} lg={12}>
                <ListLink to="https://twitter.com/yldio">Twitter</ListLink>
              </Col>

              <Col xs={4} md={2} lg={12}>
                <ListLink to="https://github.com/yldio">Github</ListLink>
              </Col>

              <Col xs={4} md={2} lg={12}>
                <ListLink to="https://youtube.com">Youtube</ListLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Padding>
      <Margin bottom={15} inline>
        <Copy white>
          <Row>
            <Col xs={12}>
              © 2018 Made with love by YLD. All rights reservered
            </Col>
            <Col>
              <Link white to="/privacy-policy">
                Privacy
              </Link>
              <Link white to="/terms">
                Terms
              </Link>
              <Link white to="/sitemap">
                Sitemap
              </Link>
            </Col>
          </Row>
        </Copy>
      </Margin>
    </Grid>
  </Section>
);
