import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H1, H3, H4, Copy } from 'components/typography';
import Checklist, { Item as CheckItem } from 'components/checklist';
import Section from 'components/section';
import Hero from 'components/hero';
import Button from 'components/button';
import Card from 'components/card';
import Hr from 'components/hr';

import JoinUs from 'sections/join-us';
import Header from 'sections/header';
import Footer from 'sections/footer';

import KnowForBg from 'assets/know-for-bg.png';
import UnexpectedBg from 'assets/unexpected-bg.png';

export default () => (
  <Fragment>
    <Hero dark>
      <Margin bottom={38}>
        <Header dark />
      </Margin>
      <Grid>
        <Row>
          <Col xs={12} sm={7}>
            <Margin bottom={12}>
              <H1 whiter>Innovation at the core, together</H1>
            </Margin>
          </Col>
          <Col xs={12} sm={6}>
            <Margin bottom={12}>
              <Copy whiter>
                We enable the worlds leading enterprises to drive digital
                transformation and define their technology future through
                strategy, design and custom software engineering.
              </Copy>
            </Margin>
            <Margin bottom={{ xs: 16, md: 111 }}>
              <Button white to="/services">
                Our Services
              </Button>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Section>
      <Grid>
        <Row center="xs" around="xs" top="xs">
          <Col xs={12} sm={12} md={4}>
            <Margin top={{ xs: 11, md: -39 }} inline>
              <Card title="Technology" height="255" width="100%">
                <Copy>
                  Driving innovation through digital transformation to build
                  relentlessly relevant companies
                </Copy>
              </Card>
            </Margin>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Margin top={{ xs: 11, md: -39 }} inline>
              <Card title="Culture" height="255" width="100%">
                <Copy>
                  Creating enduring cultures of engineering & design innovation
                </Copy>
              </Card>
            </Margin>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Margin top={{ xs: 11, md: -39 }} inline>
              <Card title="Training" height="255" width="100%">
                <Copy>
                  Originators who train your talent through skills transfer and
                  pair programming
                </Copy>
              </Card>
            </Margin>
          </Col>
        </Row>
        <Margin top={48} inline>
          <Row>
            <Col xs={12} sm={6}>
              <H3 decorated>What do we do</H3>
            </Col>
            <Col xs={12} sm={6}>
              <Copy>
                We help companies ignite radical technology innovation and
                through digital transformation, build the most relentlessly
                relevant brands.<br />
                <br />Comfortable with digital change, we know how to create a
                lasting engineering culture of experimentation, to make sure our
                clients are too.​<br />
                <br />We thrive in enabling our clients to unlock the potential
                of their talent through up-skilling and pair programming,
                empowering them to stay ahead of the competition and improve
                their bottom line.
              </Copy>
            </Col>
          </Row>
        </Margin>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Margin top={45} bottom={45}>
          <Hr />
        </Margin>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Margin bottom={45}>
          <Row>
            <Col xs={12}>
              <H3 decorated>What we enable you to do</H3>
            </Col>
            <Col xs={12}>
              <Checklist>
                <Row between="xs">
                  <Col xs={12} sm={6}>
                    <Padding right={{ xs: 0, sm: 23 }}>
                      <CheckItem>
                        Transform, innovate and differentiate at speed
                      </CheckItem>
                      <CheckItem>
                        Adopt cutting edge technologies - We’re pioneers in JS,
                        Node.js, React and Design Systems
                      </CheckItem>
                      <CheckItem>
                        Build custom software solutions that become your asset
                      </CheckItem>
                    </Padding>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Padding right={{ xs: 0, sm: 23 }}>
                      <CheckItem>
                        Grow capability inside your organisation - consulting,
                        training, pairing and education
                      </CheckItem>
                      <CheckItem>Grow a design & engineering culture</CheckItem>
                      <CheckItem>
                        Deliver the right user experience at the right time, on
                        the right channel
                      </CheckItem>
                    </Padding>
                  </Col>
                </Row>
              </Checklist>
            </Col>
          </Row>
        </Margin>
      </Grid>
    </Section>
    <Hero bg={KnowForBg} height="467" />
    <Section dark>
      <Grid>
        <Margin top={48} bottom={48} inline>
          <Row>
            <Col xs={12} sm={6}>
              <H3 whiter decorated>
                What do we do
              </H3>
            </Col>
            <Col xs={12} sm={6}>
              <Copy white>
                We help clients rethink their approach for the digital age,
                together creating a new style of technology leadership.<br />
                <br />Our team are originators, who have had a profound
                influence on the early adoption of node.js, Kubernetes and React
                across the global community and we are proud members of the
                Node.js Foundation.<br />
                <br />As a magnet for experimental thinkers from around the
                world, we like to partner with our clients to rewrite the
                Silicon Valley playbook on digital transformation.<br />
                <br />Market challengers, next generation leaders with the
                finest engineers in Europe.<br />
                <br />We are Open source in technology and bring a distributed
                working philosophy. The team passionately encourages a culture
                of giving back to the community and are always excited to code
                the future.
              </Copy>
            </Col>
          </Row>
        </Margin>
      </Grid>
    </Section>
    <Hero bg={UnexpectedBg} height="513" center>
      <Grid>
        <Row center="xs" middle="xs">
          <Col xs={12} sm={9}>
            <H4 whiter decorated center>
              Sometimes doing the unexpected. Helping you to disrupt, mitigate
              risks and successfully reinvent.
            </H4>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <JoinUs />
    <Footer />
  </Fragment>
);
