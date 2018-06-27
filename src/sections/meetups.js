import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import Flex, { FlexItem } from 'styled-flex-component';
import Hr from 'components/hr';
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
              <Link to={`/our-clients#${ParamCase(name)}`}>Learn more</Link>
            </FlexItem>
          </Flex>
        </Col>
      </Row>
    </Margin>
  </Col>
);

export default () => (
  <Fragment>
    <Section>
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
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
                  SignUpLink: 'Sign Up',
                  hour: '6:00 PM to 8:30 PM',
                  address:
                    '@WeWork Aldwych House 71 - 91 Aldwych WC2B 4HN London'
                }
              ]}
            />
            <Grid>
              <Hr />
            </Grid>
            <Meetups
              videoId="sbe_2N5urMs"
              name="London Node.JS Meetup"
              description="The #LNM is for the Node.JS beginners and advanced enthusiasts keen to dive into latest Node trends and have fun with growing tech community!"
            />
            <Grid>
              <Hr />
            </Grid>
            <Meetups
              image={MeetupsPlaceholder}
              name="London TensorFlow Meetup"
              description="#LTM is for beginners and experienced software engineers, open source enthusiasts, and scientists interested in using TensorFlow, have fun with technology and explore growing community around it!"
            />
            <Grid>
              <Hr />
            </Grid>
            <Meetups
              image={MeetupsPlaceholder}
              name="Manchester Frontend Meetup"
              description="Manchester Frontend Meetup is a group of web developers who are passionate about sharing knowledge and promoting best practices. Each month, we will present 2-3 speakers who will discuss topics covering all things frontend."
            />
            <NextMeetups
              futureMeetups={[
                {
                  data: '20',
                  month: 'JUNE',
                  title: 'Manchester Frontend Meetup #1',
                  description:
                    'We are thrilled to bring Sophie Koonin (Johh Lewis) and Kimberley Cook (Hive) hosted by Hive.',
                  SignUpLink: 'Sign Up',
                  hour: '6:00 PM to 10:00 PM',
                  address:
                    '@AO.com Riverside, Baskerville House Browncross Street West  Salford'
                }
              ]}
            />
            <Grid>
              <Hr />
            </Grid>
            <Meetups
              videoId="Ypb6m8ml4ZA"
              name="Digital Product London"
              description="Digital Product London gathers top digital product minds to explore, explain and discuss challenging concepts, from product design to engineering culture."
            />
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
