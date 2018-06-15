import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';

import { H3, H4, Copy } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';

export default () => (
  <Fragment>
    <Section dark>
      <Padding top={56} bottom={70}>
        <Grid>
          <Row>
            <Col xs={12}>
              <H3 whiter decorated>
                How we educate for knowledge transfer
              </H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
    <Section>
      <Padding bottom={50}>
        <Grid>
          <Row between="xs">
            <Col xs={12} sm={4}>
              <Margin top={-38} inline>
                <Card
                  title="Private Training"
                  points={[
                    'Hands-on learning experience, in-person classes',
                    'Tailoried training program delivered on-site to suit your needs',
                    'Ensures your software engineers share a baseline'
                  ]}
                />
              </Margin>
            </Col>
            <Col xs={12} sm={4}>
              <Margin top={-38} inline>
                <Card
                  title="Pairing"
                  points={[
                    'Ongoing tutoring that covers all aspect of tech and product delivery',
                    'Seasoned YLD engineers and designers available to answer questions at all times',
                    'Experienced supervisio for code review'
                  ]}
                />
              </Margin>
            </Col>
            <Col xs={12} sm={4}>
              <Margin top={-38} inline>
                <Card
                  title="Certification"
                  points={[
                    'Gain recognition for expertise and ability to employ best practices',
                    'Assess engineering candidates expertise and compare the results with your team’s performance'
                  ]}
                />
              </Margin>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
    <Section>
      <Padding bottom={50}>
        <Grid>
          <Row between="xs">
            <Col xs={12} sm={6}>
              <H4 decorated>
                Our goal is never to just deliver but always to also upskill
                your whole team.
              </H4>
            </Col>
            <Col xs={12} sm={6}>
              <Copy>
                We are an agile, flexible and passionate team consisting of
                strategy, design and engineering.<br />
                <br />We aspire to bring you the most up-to-date technology,
                with the minimal hassle possible.<br />
                <br />We take a hands on approach in our work, engaging directly
                with you in every stage of the development process.<br />
                <br />We take ownership of the delivery of the project or we can
                integrate at critical points with your team according to your
                needs.<br />
                <br />We enable your organisation to deliver world-class
                technology and user experiences, long after we leave.
              </Copy>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
