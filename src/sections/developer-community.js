import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import Hero from 'components/hero';

import { H3, H4 } from 'components/typography';
import Section from 'components/section';
import designProductBg from 'assets/design-product-bg.png';
import Meetups from './meetups';
import Conferences from './conferences';
import TechTalks from './tech-talks';
import NextMeetups from './next-meetups';

export default ({ videos }) => (
  <Fragment>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Margin bottom={24}>
                <H4 decorated>
                  We define ourselves by the people who represent us. Our
                  emphasis on community and culture creates an environment where
                  we prioritise supporting and nurturing people’s development.
                </H4>
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
    <Hero bg={designProductBg}>
      <Padding top={175} bottom={25}>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <H3 whiter>Meetups</H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Meetups videos={videos} />
    <Hero bg={designProductBg}>
      <Padding top={175} bottom={25}>
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <H3 whiter>Conferences</H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Conferences />
    {/* <Hero height="350" dark>
      <Padding top={50}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <H4 whiter decorated>
                Tech Talks YLD
              </H4>
            </Col>
            <Col>
              <H3>
                Tech Talks YLD #TTY is the ultimate channel for talks from YLD
                run events and YLDers speaking at other conferences.
              </H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero> */}
    <TechTalks />
    <NextMeetups futureMeetups={[]} />
  </Fragment>
);
