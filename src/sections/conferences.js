import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';
import { H5, Copy } from 'components/typography';
import Section from 'components/section';
import remcalc from 'remcalc';

import ReactFest from 'assets/react-fest.png';
import DesignSystemsLondon from 'assets/design-systems-london.png';

const Link = styled.a`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
  text-underline-position: under;
`;
const Image = styled.img`
  width: 100%;
`;

const ConferencesImage = ({ src }) => (
  <Col xs={12} md={12}>
    <Margin bottom={0} left={-25}>
      <Image src={src} />
    </Margin>
  </Col>
);

export default () => (
  <Fragment>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 37, md: 53 }}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <ConferencesImage src={ReactFest} />
              <Margin bottom={6}>
                <H5>ReactFest</H5>
              </Margin>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Copy>
                  ReactFest is a React.JS open-source conference in London.
                  ReactFest is single-track, non-profit conference build by and
                  for the front-end, React community.
                </Copy>
              </Margin>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Link href="https://reactfest.uk/" target="_blank">
                  Learn more
                </Link>
              </Margin>
            </Col>
            <Col xs={12} sm={6}>
              <ConferencesImage src={DesignSystemsLondon} />
              <Margin bottom={6}>
                <H5>Design Systems London</H5>
              </Margin>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Copy>
                  Design Systems London brings together designers and engineers
                  for a day full of ideas and inspiration about the future of
                  digital products.
                </Copy>
              </Margin>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Link href="https://reactfest.uk/" target="_blank">
                  Coming Soon
                </Link>
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
