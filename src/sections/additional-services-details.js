import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';
import remcalc from 'remcalc';

import { H2, H4, H5, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Header from 'sections/header';

const Title = H5.extend`
  margin-bottom: ${remcalc(20)};
`;

export default ({ additionalService }) => {
  return (
    <Fragment>
      <Hero height="400">
        <Margin bottom={28}>
          <Header dark />
        </Margin>
        <Grid>
          <Row>
            <Col xs={12} md={10}>
              <Margin bottom={9}>
                <H2 whiter>{additionalService.headerTitle}</H2>
              </Margin>
            </Col>
            <Col xs={12} md={6}>
              <Margin bottom={35}>
                <Copy whiter>{additionalService.headerSubtitle}</Copy>
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Hero>
      <Section>
        <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
          <Grid>
            <Row>
              <Col xs={12} md={10}>
                <Margin bottom={{ xs: 9, md: 24 }}>
                  <Title>{additionalService.servicesTitle}</Title>
                  <H4>
                    {additionalService.servicesDescription.servicesDescription}
                  </H4>
                </Margin>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Margin bottom={{ xs: 9, md: 24 }}>
                  <Title>{additionalService.subtitleLeft}</Title>
                  <Copy>
                    {additionalService.subdescriptionLeft.subdescriptionLeft}
                  </Copy>
                </Margin>
              </Col>
              <Col xs={12} md={6}>
                <Margin bottom={{ xs: 9, md: 24 }}>
                  <Title>{additionalService.subtitleRight}</Title>
                  <Copy>
                    {additionalService.subdescriptionRight.subdescriptionRight}
                  </Copy>
                </Margin>
              </Col>
            </Row>
          </Grid>
        </Padding>
      </Section>
    </Fragment>
  );
};
