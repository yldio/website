import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin } from 'styled-components-spacing';

import { H3, Copy } from 'components/typography';
import Section from 'components/section';
import Hero from 'components/hero';

import KnowForBg from 'assets/known-for-bg.png';

export default () => (
  <Fragment>
    <Hero bg={KnowForBg} />
    <Section dark>
      <Grid>
        <Margin top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }} inline>
          <Row>
            <Col xs={12} md={6}>
              <H3 whiter decorated>
                What are we known for?
              </H3>
            </Col>
            <Col xs={12} md={6}>
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
  </Fragment>
);
