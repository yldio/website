import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';
import ParamCase from 'param-case';
import find from 'lodash.find';

import { H3, H4, Copy } from 'components/typography';
import Section from 'components/section';
import Card, { CardsList } from 'components/card';
import Button from 'components/button';
import Video from 'components/video';
import Image from 'components/image';

import JoyentPoster from 'assets/joyent-poster.png';

const Tagline = H4.extend`
  font-size: ${remcalc(21)};
  line-height: ${remcalc(25)};
`;

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(27)};
  color: ${props => props.theme.colors.deeppink};
`;

const CaseStudy = ({ video, image, name, tagline }) => (
  <Col xs={12} md={6}>
    <Margin bottom={{ xs: 0, md: 24 }} top={{ xs: 15, md: 24 }} inline>
      <Row>
        <Col xs={12}>
          <Margin bottom={16}>
            {image ? <Image src={image} /> : null}
            {video ? (
              <Video src={video.file.url} controls preload="metadata" />
            ) : null}
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={6}>
            <H4>{name}</H4>
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={{ xs: 9, md: 15 }}>
            <Tagline>{tagline}</Tagline>
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={{ xs: 9, md: 15 }}>
            <Link to={`/our-clients#${ParamCase(name)}`}>Learn more</Link>
          </Margin>
        </Col>
      </Row>
    </Margin>
  </Col>
);

export default ({ videos = [] }) => (
  <Fragment>
    <Section>
      <Grid>
        <CardsList>
          <Row center="xs" around="xs" top="xs">
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="technology-card" title="Technology" width="100%">
                  <Copy>
                    Driving innovation through digital transformation to build
                    relentlessly relevant companies
                  </Copy>
                </Card>
              </Margin>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="culture-card" title="Culture" width="100%">
                  <Copy>
                    Creating enduring cultures of engineering & design
                    innovation
                  </Copy>
                </Card>
              </Margin>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Margin top={{ xs: 11, lg: -39 }}>
                <Card id="training-card" title="Training" width="100%">
                  <Copy>
                    Originators who train your talent through skills transfer
                    and pair programming
                  </Copy>
                </Card>
              </Margin>
            </Col>
          </Row>
        </CardsList>
        <Margin top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }} inline>
          <Row>
            <Col xs={12} md={6}>
              <H3 decorated>What do we do</H3>
            </Col>
            <Col xs={12} md={6}>
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
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            <CaseStudy
              video={find(videos, ['title', 'trainline'])}
              name="Trainline"
              tagline="A Platform update & Improved User Experience"
            />
            <CaseStudy
              video={find(videos, ['title', 'the-economist'])}
              name="The Economist"
              tagline="Website Redesign & Improved User Experience"
            />
            <CaseStudy
              video={find(videos, ['title', 'thomas-cook'])}
              name="Thomas Cook"
              tagline="A Platform update & Improved User Experience"
            />
            <CaseStudy
              image={JoyentPoster}
              name="Joyent"
              tagline="Bringing Application Awareness to Cloud infrastructure"
            />
          </Row>
          <Row middle="xs" center="xs">
            <Col>
              <Button
                to="/our-clients"
                background="slateblue"
                color="white"
                border="slateblue"
              >
                Meet Our Clients
              </Button>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
