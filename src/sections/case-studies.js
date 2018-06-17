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

import TrainlineScreenshots from 'assets/trainline-screen.png';
import TheEconomistScreenshots from 'assets/economist-screens.png';
import ThomasCookScreenshots from 'assets/thomas-cook-screens.png';
import KingfisherScreenshots from 'assets/kinfisher-screens.png';

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

const studies = [
  {
    name: 'Trainline',
    objective: 'A Platform update & Improved User Experience',
    bg: TrainlineScreenshots,
    img: (
      <Col xs={12} lg={false}>
        <Margin bottom={{ xs: -6 }}>
          <Row middle="xs" center="xs">
            <Img src={TrainlineScreenshots} />
          </Row>
        </Margin>
      </Col>
    ),
    color: '#56c0a8',
    tagline:
      'Europe’s independent leader in the sale of train and coach tickets and the number one ticket reseller in the UK',
    topics: [
      {
        title: 'challenges',
        items: [
          'Trainline were looking for a partner to onboard node as part an ongoing project to rebuild their online web experience.',
          'About 8 million customers a month come to the website and mobile app to purchase tickets. As part of the ongoing project to rebuild their online web experience, Trainline were looking for help on-boarding node and building up new skill sets and capabilities within their team to create a world class development organisation able to meet new demands.'
        ]
      },
      {
        title: 'results',
        items: [
          'Trainline had a legacy platform in urgent need of an updated interface, YLD wrapped the legacy platform in a Node.js layer that’s efficient, and most of all easy to use. Working in an integrated way with the team to build up node capabilities, YLD restructured the shopping basket and payment page to make it more user-friendly.',
          'Trainline have benefited from a significant increase in conversion rates on the site and an upskilled team with an entirely new skill-set and capabilities.'
        ]
      }
    ]
  },
  {
    name: 'The Economist',
    objective: 'Website Redesign & Improved User Experience',
    bg: TheEconomistScreenshots,
    img: (
      <Col xs={12} lg={false}>
        <Margin bottom={{ xs: -6 }}>
          <Row middle="xs" center="xs">
            <Img src={TheEconomistScreenshots} />
          </Row>
        </Margin>
      </Col>
    ),
    color: '#383e42',
    tagline:
      'A world renowned international current affairs, politics and news magazine',
    topics: [
      {
        title: 'challenges',
        items: [
          'Technology is a core part of the way the business is run and an integral part of the storytelling industry, but the old The Economist website was hard to maintain and not a mobile first experience and in need of a redesign. The Economist wanted to improve their architecture and work with node and React to achieve a more flexible solution.',
          'The Economist needed a redesign and implementation of existing blogs sites with server-side rendering. In addition to this they needed to divert web traffic from a legacy CMS to a new set of micro-services.'
        ]
      },
      {
        title: 'results',
        items: [
          'YLD partnered with The Economist team to build a vision and introduced a team of dedicated and experienced engineers working together to seamlessly create a better reading experience. YLD helped construct a NodeJS and ReactJS system that decreased visitors’ perceived webpage load times. Over 12 months, YLD replaced all Economist.com user facing pages, replacing every piece of Html and using Node and React technologies to update the systems and the way they talk to each and deliver a content centric approach and more flexible solution.  Today, shared codebase reduces front- and back-end maintenance cost. Integration with new RESTful micro service tier resulted in faster response times requiring less hardware.'
        ]
      }
    ]
  },
  {
    name: 'Thomas Cook',
    objective: 'Faster Release Cycles & Improved User Experience',
    bg: ThomasCookScreenshots,
    img: (
      <Col xs={12} lg={false}>
        <Margin bottom={{ xs: -6 }}>
          <Row middle="xs" center="xs">
            <Img src={ThomasCookScreenshots} />
          </Row>
        </Margin>
      </Col>
    ),
    color: '#ffb92d',
    tagline:
      'The Thomas Cook Group is the oldest and best known name in leisure travel with a history of innovation that started in 1841. Now serving 19 million customers, Thomas Cook is focused on transforming their business to deliver better their holiday dreams.',
    topics: [
      {
        title: 'challenges',
        items: [
          'The Thomas Cook Group is the oldest and best known name in leisure travel with a history of innovation that started in 1841. Now serving 19 million customers, Thomas Cook is focused on transforming their business to deliver better their holiday dreams.'
        ]
      },
      {
        title: 'results',
        items: [
          'Some of the key results achieved were faster release cycles and quicker turnaround of new features, with improved performance and speed. From a mobile user perspective, there was a uplift of 30%, of which 20% was due to technology and responsive design for mobile.  '
        ]
      }
    ]
  },
  // {
  //   name: 'Joyent',
  //   // objective: 'xxx',
  //   imagePath: JoyentScreenshots,
  //   color: '#3b4aaf',
  //   headlineTextColour: '#ffffff',
  //   tagline: 'xxx',
  //   challenges: ['xxx'],
  //   results: ['xxx'],
  //   video: false
  // },
  {
    name: 'Kingfisher',
    objective: 'Integrating new services & in-store mobile app',
    bg: KingfisherScreenshots,
    img: (
      <Col xs={12} lg={false}>
        <Margin bottom={{ xs: -6 }}>
          <Row middle="xs" center="xs">
            <Img src={KingfisherScreenshots} />
          </Row>
        </Margin>
      </Col>
    ),
    color: '#3c3c3c',
    tagline:
      'Kingfisher plc is an international home improvement company offering DIY and home improvement products and services.',
    topics: [
      {
        title: 'challenges',
        items: [
          'The company needed an overhaul of their middle layer service that integrates the KF services and their C&C project (the mobile app for Kingfisher stores)',
          'Required expert micro services',
          'Creation of an internal NodeJS team'
        ]
      },
      {
        title: 'results',
        items: [
          'Using the best practises YLD helped build secure, scalable, and fast RESTful services.',
          'YLD used pair programming to upskill KF development team, to help them continue to implement new changes even after the contract term ended. '
        ]
      }
    ]
  }
];

const Topic = ({ title = '', items = [] }) => (
  <Col xs={12} md={6}>
    <Row>
      <Col xs={12}>
        <H5>{title}</H5>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <BulletList>
          {items.map(item => (
            <BulletListItem key={item}>{item}</BulletListItem>
          ))}
        </BulletList>
      </Col>
    </Row>
  </Col>
);

const CaseStudy = ({
  img,
  bg,
  video,
  color = '#56c0a8',
  name = '',
  objective = '',
  tagline = '',
  topics = []
}) => (
  <Fragment>
    <Hero
      bg={bg}
      position="bottom right"
      size="initial"
      color={color}
      id={ParamCase(name)}
    >
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin top={{ xs: 15, lg: 94 }}>
              <H2 whiter>{name}</H2>
            </Margin>
          </Col>
          <Col xs={12}>
            <Margin bottom={{ xs: 9, lg: 78 }}>
              <Copy whiter>{objective}</Copy>
            </Margin>
          </Col>
          {img}
        </Row>
      </Grid>
    </Hero>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Margin bottom={24}>
                <H4>{tagline}</H4>
              </Margin>
            </Col>
          </Row>
          <Row between="xs">
            {topics.map(({ title, items }) => (
              <Topic key={title} title={title} items={items} />
            ))}
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

export default ({ videos = [] }) => {
  return studies.map(({ name, ...study }) => (
    <CaseStudy
      key={name}
      video={find(videos, ['title', ParamCase(name)])}
      name={name}
      {...study}
    />
  ));
};
