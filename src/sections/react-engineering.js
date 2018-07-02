import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H2, H4, H5, Copy } from 'components/typography';
import Hero from 'components/hero';
import Section from 'components/section';
import Header from 'sections/header';

// const ServicesDescription = ({
//   ServicesTitle,
//   ServicesDescription,
//   subTitleLeft,
//   subTitleRight,
//   subDescriptionLeft,
//   subDescriptionRight
// }) => (
//   <Grid>
//     <Row>
//       <Col xs={12} md={10}>
//         <Margin bottom={{ xs: 9, md: 24 }}>
//           <H5>{ServicesTitle}</H5>
//           <H4>{ServicesDescription}</H4>
//         </Margin>
//       </Col>
//     </Row>
//     <Row>
//       <Col xs={12} md={6}>
//         <Margin bottom={{ xs: 9, md: 24 }}>
//           <H5>{subTitleLeft}</H5>
//           <Copy>{subDescriptionLeft}</Copy>
//         </Margin>
//       </Col>
//       <Col xs={12} md={6}>
//         <Margin bottom={{ xs: 9, md: 24 }}>
//           <H5>{subTitleRight}</H5>
//           <Copy>{subDescriptionRight}</Copy>
//         </Margin>
//       </Col>
//     </Row>
//   </Grid>
// );

export default ({ additionalServices }) => (
  <Fragment>
    <Section>
      <Hero height="400">
        <Margin bottom={28}>
          <Header dark />
        </Margin>
        <Grid>
          <Col xs={12} md={10}>
            <Margin bottom={9}>
              <H2 whiter>{additionalServices[0].node.headerTitle}</H2>
            </Margin>
          </Col>
          <Col xs={12} md={6}>
            <Margin bottom={35}>
              <Copy whiter>{additionalServices[0].node.headerSubtitle}</Copy>
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
              <H5>{additionalServices[0].node.servicesTitle}</H5>
              <H4>
                {
                  additionalServices[0].node.servicesDescription
                    .servicesDescription
                }
              </H4>
            </Margin>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Margin bottom={{ xs: 9, md: 24 }}>
              <H5>{additionalServices[0].node.subtitleLeft}</H5>
              <Copy>
                {
                  additionalServices[0].node.subdescriptionLeft
                    .subdescriptionLeft
                }
              </Copy>
            </Margin>
          </Col>
          <Col xs={12} md={6}>
            <Margin bottom={{ xs: 9, md: 24 }}>
              <H5>{additionalServices[0].node.subtitleRight}</H5>
              <Copy>
                {
                  additionalServices[0].node.subdescriptionRight
                    .subdescriptionRight
                }
              </Copy>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Section>
  </Fragment>
);
