import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';

import { H5, Copy } from 'components/typography';
import Section from 'components/section';
import Image from 'components/image';

import ReactFest from 'assets/about-us-1.png';
import Dsl from 'assets/about-us-2.png';

const Link = styled.div`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
`;

const ConferencesImage = ({ src }) => (
  <Col xs={12}>
    <Margin bottom={15} left={-9}>
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
              <H5>ReactFest</H5>
              <Copy>
                ReactFest is a React.JS open-source conference in London.
                ReactFest is single-track, non-profit conference build by and
                for the front-end, React community.
              </Copy>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Link>Learn more</Link>
              </Margin>
            </Col>
            <Col xs={12} sm={6}>
              <ConferencesImage src={Dsl} />
              <H5>Design Systems London</H5>
              <Copy>
                Design Systems London brings together designers and engineers
                for a day full of ideas and inspiration about the future of
                digital products.
              </Copy>
              <Margin bottom={{ xs: 9, md: 15 }}>
                <Link>Coming Soon</Link>
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
