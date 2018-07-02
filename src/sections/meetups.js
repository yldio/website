import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import Flex, { FlexItem } from 'styled-flex-component';
import Hr from 'components/hr';
import styled from 'styled-components';
import remcalc from 'remcalc';

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

const Link = styled.a`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
  text-underline-position: under;
`;

const opts = {
  display: 'inline-block',
  position: 'relative',
  height: '286,7',
  width: '100%'
};

const Meetups = ({ image, name, description, videoId, href }) => (
  <Col xs={12} md={12}>
    <Margin bottom={{ xs: 15, md: 35 }} top={{ xs: 15, md: 35 }} inline>
      <Row>
        <Col xs={12} md={6}>
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
        </Col>
        <Col xs={12} md={6}>
          <Flex column alignStretch contentStretch justifyBetween full>
            <Margin bottom={6}>
              <FlexItem>
                <H4>{name}</H4>
              </FlexItem>
            </Margin>
            <FlexItem grow="1" basis="auto">
              <Description>{description}</Description>
            </FlexItem>
            <FlexItem>
              <Link href={href} target="_blank">
                Learn more
              </Link>
            </FlexItem>
          </Flex>
        </Col>
      </Row>
    </Margin>
  </Col>
);

export default ({ meetupCommunities, events }) => (
  <Fragment>
    <Section>
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            {meetupCommunities.map(({ ...community }, index) => (
              <Fragment key={community.node.meetupCommunityName}>
                <Meetups
                  videoId={
                    community.node.videoYouTubeId
                      ? community.node.videoYouTubeId
                      : 0
                  }
                  image={community.node.videoYouTubeId ? 0 : MeetupsPlaceholder}
                  name={community.node.meetupCommunityName}
                  description={community.node.description.description}
                />
                {events.filter(
                  event =>
                    event.node.meetupUrlName === community.node.meetupUrlName
                ).length > 0 && (
                  <NextMeetups
                    futureMeetups={events.filter(
                      event =>
                        event.node.meetupUrlName ===
                        community.node.meetupUrlName
                    )}
                  />
                )}
                {index < meetupCommunities.length - 1 && (
                  <Grid>
                    <Hr />
                  </Grid>
                )}
              </Fragment>
            ))}

            {/* <Meetups
              videoId="jRs1HaSwIP4"
              name="React.JS Girls London"
              description="ReactJS Girls is a community meetup voicing female engineers who want to learn and teach their experience using React. Although the meetup is aimed to at women in tech community, attendees of all genders are welcome to attend."
              href="https://www.meetup.com/ReactJS-Girls-London/"
            />
            <NextMeetups
              futureMeetups={[
                {
                  data: '19',
                  month: 'JUNE',
                  title: 'ReactJS Girls #10 - Talking the Talk',
                  description:
                    'We are thrilled to bring Sophie Koonin (Johh Lewis) and Kimberley Cook (Hive) hosted by Hive.',
                  SignUpLink: 'Sign Up',
                  hour: '6:00 PM to 8:30 PM',
                  address:
                    '@WeWork Aldwych House 71 - 91 Aldwych WC2B 4HN London'
                }
              ]}
            /> */}
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
