import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';
import ParamCase from 'param-case';

import { H3, H4, Copy } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';
import Button from 'components/button';
import Video from 'components/video';

import TrainlineVideo from 'assets/trainline.mp4';
import TheEconomistVideo from 'assets/economist.mp4';
import ThomasCookVideo from 'assets/thomascook.mp4';
import JoyentPoster from 'assets/joyent-poster.png';

const Image = styled.img`
  box-shadow: 10.3px 12.3px 40px 5px rgba(25, 5, 51, 0.15);
  width: 100%;
`;

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
    <Margin bottom={{ xs: 15, sm: 24 }} top={{ xs: 15, sm: 24 }} inline>
      <Row>
        <Col xs={12}>
          <Margin bottom={16}>
            {image ? <Image src={image} /> : null}
            {video ? <Video src={video} controls preload="metadata" /> : null}
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={6}>
            <H4>{name}</H4>
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={{ xs: 9, sm: 15 }}>
            <Tagline>{tagline}</Tagline>
          </Margin>
        </Col>
        <Col xs={12}>
          <Margin bottom={{ xs: 9, sm: 15 }}>
            <Link to={`/our-clients#${ParamCase(name)}`}>Learn more</Link>
          </Margin>
        </Col>
      </Row>
    </Margin>
  </Col>
);

export default () => (
  <Fragment>
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
        <Margin top={{ xs: 15, sm: 36 }} bottom={{ xs: 15, sm: 36 }} inline>
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
      <Padding bottom={{ xs: 15, sm: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            <CaseStudy
              video={TrainlineVideo}
              name="Trainline"
              tagline="A Platform update & Improved User Experience"
            />
            <CaseStudy
              video={TheEconomistVideo}
              name="Trainline"
              tagline="A Platform update & Improved User Experience"
            />
            <CaseStudy
              video={ThomasCookVideo}
              name="Trainline"
              tagline="A Platform update & Improved User Experience"
            />
            <CaseStudy
              image={JoyentPoster}
              name="Trainline"
              tagline="A Platform update & Improved User Experience"
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
