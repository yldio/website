import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import BaseLink from 'gatsby-link';
import remcalc from 'remcalc';
import ParamCase from 'param-case';
import find from 'lodash.find';

import { H4 } from 'components/typography';
import Section from 'components/section';
import Button from 'components/button';
import Video from 'components/video';
import Image from 'components/image';

import JoyentPoster from 'assets/joyent-poster.png';
import TrainlinePoster from 'assets/trainline-poster.png';
import TheEconomistPoster from 'assets/economist-poster.png';
import ThomasCookPoster from 'assets/thomascook-poster.png';

const Tagline = H4.extend`
  font-size: ${remcalc(21)};
  line-height: ${remcalc(25)};
`;

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(27)};
  color: ${props => props.theme.colors.deeppink};
  text-underline-position: under;
`;

const CaseStudy = ({ video, image, name, tagline }) => (
  <Col xs={12} md={6}>
    <Margin bottom={{ xs: 0, md: 24 }} top={{ xs: 15, md: 24 }} inline>
      <Row>
        <Col xs={12}>
          <Margin bottom={16}>
            {image ? <Image src={image} /> : null}
            {video ? (
              <Video
                poster={
                  name === 'The Economist'
                    ? TheEconomistPoster
                    : name === 'Trainline'
                      ? TrainlinePoster
                      : ThomasCookPoster
                }
                src={video.file.url}
                controls
                preload="metadata"
              />
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
    <Section data-selector="what-do-we-do:clients">
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            <CaseStudy
              video={find(videos, ['title', 'trainline'])}
              name="Trainline"
              tagline="Europe’s leading train and coach platform"
            />
            <CaseStudy
              video={find(videos, ['title', 'the-economist'])}
              name="The Economist"
              tagline="World renowned current affairs magazine"
            />
            <CaseStudy
              video={find(videos, ['title', 'thomas-cook'])}
              name="Thomas Cook"
              tagline="FTSE listed global travel company"
            />
            <CaseStudy
              image={JoyentPoster}
              name="Joyent"
              tagline="Cloud provider, part of Samsung"
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
