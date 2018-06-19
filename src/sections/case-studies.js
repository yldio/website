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
      <Col style={{ width: '100%' }} xs={12} lg={6}>
        <Margin bottom={{ xs: -6 }}>
          <Row middle="xs" center="xs">
            <Img src={TrainlineScreenshots} />
          </Row>
        </Margin>
      </Col>
    ),
    color: '#56c0a8',
    tagline:
      'Europe’s leading independent train and coach platform, working with 180+ train and coach companies to offer travel to thousands of destinations across 36 countries.',
    topics: [
      {
        title: 'challenges',
        items: [
          'Trainline were looking for a partner to onboard Node.js as part an ongoing project to enhance their online web experience.',
          'Trainline’s platforms attract more than 60 million visits per month.',
          'As part of the ongoing project to enhance their online web experience, Trainline were looking for help on-boarding Node.js and to build up new skill sets and capabilities within their team to create a world class development organisation able to meet new demands.'
        ]
      },
      {
        title: 'results',
        items: [
          'Trainline had a platform in urgent need of an updated interface. YLD wrapped the platform in a Node.js layer that’s efficient and easy to use. Working in an integrated way with the team to build up its development capabilities, YLD helped the Trainline team restructure the entire user journey to make it more responsive and user-friendly. '
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
    objective: 'Faster Release Cycles and an improved customer experience',
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
      'Thomas Cook Group plc is a British global travel company and the oldest and best known name in leisure travel with a history of innovation.',
    topics: [
      {
        title: 'challenges',
        items: [
          'The Thomascook.com website was slow, hard to maintain and creating lots of downtime which was impacting stability and the customer experience.  The project had a tight deadline, with the goal of building a stable modern infrastructure ahead of the holiday peak booking season. Using Node.js and Angular.js YLD delivered a strengthened front-end and faster release cycle to provide ultimate user-experience.'
        ]
      },
      {
        title: 'results',
        items: [
          'Thomas Cook reached out on the grounds of outdated infrastructure and slow time-to-market features. YLD worked with the Thomas Cook team to deliver a strengthened front-end, enabling a much faster turnaround of new features and release cycles, from months to weeks. The new infrastructure improved performance and speed and created a stronger more responsive customer experience. Overall conversion went up and from a mobile user perspective, there was an uplift of 30%, of which 20% was due to technology and responsive design for mobile.',
          'YLD partnered with Thomas Cook to create a culture change across engineering by helping upskill existing teams and sharing expertise and a passion for ‘making it happen’.'
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
          'The client needed an overhaul of a middle layer service that integrates the Kingfisher services with their Store Colleague project (the mobile app for Kingfisher stores).',
          'Required expert microservices',
          'Creation of an internal Node.js team'
        ]
      },
      {
        title: 'results',
        items: [
          'Using the best practises YLD helped build secure, scalable, and fast RESTful services.',
          'YLD used pair programming to upskill the Kingfisher development team, to help them continue to implement new changes even after the contract term ended.'
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
          <Col xs={12} xl={6}>
            <Margin top={{ xs: 15, lg: 94 }}>
              <H2 whiter>{name}</H2>
            </Margin>

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
