import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';
import ParamCase from 'param-case';
import find from 'lodash.find';

import { H2, H4, H5, Copy } from 'components/typography';
import BulletList, { Item as BulletListItem } from 'components/bullet-list';
import Section from 'components/section';
import BaseHero from 'components/hero';
import Video from 'components/video';

const Hero = BaseHero.extend`
  background: ${props => props.color};

  ${breakpoint('lg')`
    background: url('${props => props.bg}');
    background-color: ${props => props.color};
    background-position: ${props => props.position};
    background-repeat: no-repeat;
    background-size: ${props => props.size};
  `};
`;

const Img = styled.img`
  width: 100%;
`;

const List = ({ items = [] }) => (
  <Row>
    <Col xs={12}>
      <BulletList>
        {items.map(item => <BulletListItem key={item}>{item}</BulletListItem>)}
      </BulletList>
    </Col>
  </Row>
);

const CaseStudy = ({ video, studyDetails }) => (
  <Fragment>
    <Hero
      bg={studyDetails.screenshotForHeadline.file.url}
      position="bottom 0 left 50vw"
      size="initial"
      color={studyDetails.brandBackgroundColour}
      fontColor={studyDetails.brandFontColour}
      id={ParamCase(studyDetails.clientName)}
    >
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <Margin top={{ xs: 15, lg: 94 }}>
              <H2 brand fontColor={studyDetails.brandFontColour}>
                {studyDetails.clientName}
              </H2>
            </Margin>

            <Margin bottom={{ xs: 9, lg: 78 }}>
              <Copy brand fontColor={studyDetails.brandFontColour}>
                {studyDetails.objective.objective}
              </Copy>
            </Margin>
          </Col>

          <Col xs={12} lg={false}>
            <Margin bottom={{ xs: -6 }}>
              <Row middle="xs" center="xs">
                <Img src={studyDetails.screenshotForHeadline.file.url} />
              </Row>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Hero>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Margin bottom={24}>
                <H4>{studyDetails.tagline.tagline}</H4>
              </Margin>
            </Col>
          </Row>
          <Row between="xs">
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12}>
                  <H5>Challenges</H5>
                </Col>
              </Row>
              <List items={studyDetails.topics.challenges} />
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col xs={12}>
                  <H5>Results</H5>
                </Col>
              </Row>
              <List items={studyDetails.topics.results} />
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
    {video ? (
      <Section>
        <Padding bottom={{ xs: 15, md: 36 }}>
          <Grid>
            <Row>
              <Col xs={12}>
                <Video src={video.file.url} controls preload="metadata" />
              </Col>
            </Row>
          </Grid>
        </Padding>
      </Section>
    ) : null}
  </Fragment>
);

export default ({ studies, videos = [] }) => {
  return studies.map(({ ...study }) => (
    <CaseStudy
      key={study.node.clientName}
      video={find(videos, ['title', ParamCase(study.node.clientName)])}
      name={study.node.clientName}
      studyDetails={study.node}
    />
  ));
};
