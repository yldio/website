import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';
import ParamCase from 'param-case';

import BaseLink from 'gatsby-link';
import { H4 } from 'components/typography';
import Section from 'components/section';
import NextMeetups from './next-meetups';

import YouTube from 'react-youtube';
import MeetupsPlaceholder from 'assets/meetups-placeholder.png';

const Image = styled.img`
  width: 100%;
`;

const Description = H4.extend`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
`;

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
`;

const opts = {
  display: 'inline-block',
  position: 'relative',
  height: '286,7',
  width: '100%'
};

const Meetups = ({ image, name, description, videoId }) => (
  <Col xs={12} md={12}>
    <Margin bottom={{ xs: 0, md: 24 }} top={{ xs: 15, md: 24 }} inline>
      <Row>
        <Col xs={12} md={6}>
          <Margin bottom={16}>
            {image ? (
              <Image src={image} />
            ) : (
              <YouTube
                videoId={videoId}
                autoplay="0"
                rel="0"
                modest="1"
                opts={opts}
              />
            )}
          </Margin>
        </Col>
        <Col xs={12} md={6}>
          <Margin bottom={6}>
            <H4>{name}</H4>
          </Margin>
          <Margin bottom={{ xs: 9, md: 15 }}>
            <Description>{description}</Description>
          </Margin>
          <Margin bottom={{ xs: 9, md: 15 }}>
            <Link to={`/our-clients#${ParamCase(name)}`}>Learn more</Link>
          </Margin>
        </Col>
      </Row>
    </Margin>
  </Col>
);

export default ({ meetupCommunities }) => (
  <Fragment>
    <Section>
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            {meetupCommunities.map(({ ...community }) => (
              <Meetups
                key={community.node.meetupCommunityName}
                videoId={
                  community.node.videoYouTubeId
                    ? community.node.videoYouTubeId
                    : 0
                }
                image={community.node.videoYouTubeId ? 0 : MeetupsPlaceholder}
                name={community.node.meetupCommunityName}
                description={community.node.description.description}
              />
            ))}

            <Meetups
              videoId="jRs1HaSwIP4"
              name="React.JS Girls London"
              description="ReactJS Girls is a community meetup voicing female engineers who want to learn and teach their experience using React. Although the meetup is aimed to at women in tech community, attendees of all genders are welcome to attend."
            />
            <NextMeetups
              futureMeetups={[
                {
                  data: '19',
                  month: 'JUNE',
                  title: 'ReactJS Girls #10 - Talking the Talk',
                  description:
                    'We are thrilled to bring Sophie Koonin (Johh Lewis) and Kimberley Cook (Hive) hosted by Hive.',
                  linkB: 'FEFFFF',
                  hour: '6:00 PM to 8:30 PM',
                  address:
                    '@WeWork Aldwych House 71 - 91 Aldwych WC2B 4HN London'
                }
              ]}
            />
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
