import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';
import Hero from 'components/hero';

import addCodeBg from 'assets/addcode-bg.png';

export default () => (
  <Fragment>
    <Hero bg={addCodeBg}>
      <Padding top={175} bottom={25}>
        <Grid>
          <Row>
            <Col xs={7}>
              <H3 whiter>Remote Dedicated Services - Addcode </H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row between="xs">
            <Col xs={12} md={6}>
              <Copy>
                If you are looking for iterative and Agile development
                strategies; cooperative development procedures; fast and easy
                communication; rapid prototyping; and user-centric design,
                remote teams nearshore are is the option for you.<br />
                <br />Utilizing our Addcode, our remote option brings benefits.
                Meaning this method provides advantages in both the initial cost
                standpoint, and in its risk-averseness.
              </Copy>
            </Col>
            <Col xs={12} md={4}>
              <Margin top={{ xs: 15, md: -74 }}>
                <Card
                  title="AddCode Brings You"
                  points={[
                    'Scalability',
                    'Language skills and proficiency',
                    'Tech skills',
                    'Types of services',
                    'Complexity of work',
                    'Geography - same time zone',
                    'Talent offering',
                    'Choice of location - Porto & Lisbon, Manchester'
                  ]}
                />
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
