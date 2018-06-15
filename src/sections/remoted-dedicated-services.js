import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';
import Hero from 'components/hero';

export default () => (
  <Fragment>
    <Hero height="460">
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
      <Padding top={50} bottom={50}>
        <Grid>
          <Row between="xs">
            <Col xs={12} sm={6}>
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
            <Col xs={12} sm={4}>
              <Margin top={-88} inline>
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
