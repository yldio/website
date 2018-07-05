import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, H4, H5, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Header from 'sections/header';

export default ({ additionalService }) => {
  return (
    <Fragment>
      <Section>
        <Hero height="400">
          <Margin bottom={28}>
            <Header dark />
          </Margin>
          <Grid>
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
          </Grid>
        </Hero>
      </Section>
      <Section>
        <Grid>
          <Row>
            <Col xs={12} md={10}>
              <Margin bottom={{ xs: 9, md: 24 }}>
                <H5>{additionalService.servicesTitle}</H5>
                <H4>
                  {additionalService.servicesDescription.servicesDescription}
                </H4>
              </Margin>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Margin bottom={{ xs: 9, md: 24 }}>
                <H5>{additionalService.subtitleLeft}</H5>
                <Copy>
                  {additionalService.subdescriptionLeft.subdescriptionLeft}
                </Copy>
              </Margin>
            </Col>
            <Col xs={12} md={6}>
              <Margin bottom={{ xs: 9, md: 24 }}>
                <H5>{additionalService.subtitleRight}</H5>
                <Copy>
                  {additionalService.subdescriptionRight.subdescriptionRight}
                </Copy>
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Section>
    </Fragment>
  );
};
