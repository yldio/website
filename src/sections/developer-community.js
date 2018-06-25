import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import Hero from 'components/hero';

import { H3, H4 } from 'components/typography';
import Section from 'components/section';
import meetupsBg from 'assets/meetups-bg.png';
import conferencesBg from 'assets/conferences-bg.png';
import Meetups from './meetups';
import Conferences from './conferences';
import TechTalks from './tech-talks';

export default ({ videos }) => (
  <Fragment>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
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
    <Hero bg={meetupsBg}>
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
    <Hero bg={conferencesBg}>
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
    <TechTalks />
  </Fragment>
);
