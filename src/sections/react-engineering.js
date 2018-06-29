import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, H4, H5, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Header from 'sections/header';

const ServicesHeader = ({ header, description }) => (
  <Hero height="400">
    <Margin bottom={28}>
      <Header dark />
    </Margin>
    <Grid>
      <Col xs={12} md={10}>
        <Margin bottom={9}>
          <H2 whiter>{header}</H2>
        </Margin>
      </Col>
      <Col xs={12} md={6}>
        <Margin bottom={35}>
          <Copy whiter>{description}</Copy>
        </Margin>
      </Col>
    </Grid>
  </Hero>
);

const ServicesDescription = ({
  title,
  description,
  subTitleLeft,
  subTitleRight,
  subDescriptionLeft,
  subDescriptionRight
}) => (
  <Grid>
    <Row>
      <Col xs={12} md={10}>
        <Margin bottom={{ xs: 9, md: 24 }}>
          <H5>{title}</H5>
          <H4>{description}</H4>
        </Margin>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <Margin bottom={{ xs: 9, md: 24 }}>
          <H5>{subTitleLeft}</H5>
          <Copy>{subDescriptionLeft}</Copy>
        </Margin>
      </Col>
      <Col xs={12} md={6}>
        <Margin bottom={{ xs: 9, md: 24 }}>
          <H5>{subTitleRight}</H5>
          <Copy>{subDescriptionRight}</Copy>
        </Margin>
      </Col>
    </Row>
  </Grid>
);

export default () => (
  <Fragment>
    <Section>
      <ServicesHeader
        header="React software engineering"
        description="React is regarded as the premier way to build big, fast Web apps
      with JavaScript."
      />
    </Section>
    <Section>
      <Grid>
        <ServicesDescription
          title="WHY REACT?"
          description="Regard is regarded as the premier way to build big, fast Web
        apps with JavaScript."
          subTitleLeft="HIGH ROI"
          subTitleRight="LOW TCO"
          subDescriptionLeft="React’s component-based approach ensures high code reusability,
        improving the overall productivity of the development team."
          subDescriptionRight="With its move into native application development, smaller
        development teams are now able to deliver from back to front and
        to ensure-user devices."
        />
      </Grid>
    </Section>
  </Fragment>
);
