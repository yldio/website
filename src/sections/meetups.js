import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';
import styled from 'styled-components';
import remcalc from 'remcalc';
import ParamCase from 'param-case';
import find from 'lodash.find';

import BaseLink from 'gatsby-link';
import { H4 } from 'components/typography';
import Section from 'components/section';
import Video from 'components/video';
import Image from 'components/image';

const Description = H4.extend`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
`;

const Link = styled(BaseLink)`
  font-size: ${remcalc(18)};
  line-height: ${remcalc(31)};
  color: ${props => props.theme.colors.deeppink};
`;

const Meetups = ({ video, image, name, description }) => (
  <Col xs={12} md={12}>
    <Margin bottom={{ xs: 0, md: 24 }} top={{ xs: 15, md: 24 }} inline>
      <Row>
        <Col xs={6}>
          <Margin bottom={16}>
            {image ? <Image src={image} /> : null}
            {video ? (
              <Video src={video.file.url} controls preload="metadata" />
            ) : null}
          </Margin>
        </Col>
        <Col xs={6}>
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

export default ({ videos = [] }) => (
  <Fragment>
    <Section>
      <Padding bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row middle="xs" between="xs">
            <Meetups
              video={find(videos, ['title', 'trainline'])}
              name="React.JS Girls London"
              description="ReactJS Girls is a community meetup voicing female engineers who want to learn and teach their experience using React. Although the meetup is aimed to at women in tech community, attendees of all genders are welcome to attend."
            />
            <Meetups
              video={find(videos, ['title', 'trainline'])}
              name="London Node.JS Meetup"
              description="The #LNM is for the Node.JS beginners and advanced enthusiasts keen to dive into latest Node trends and have fun with growing tech community!"
            />
            <Meetups
              video={find(videos, ['title', 'trainline'])}
              name="London TensorFlow Meetup"
              description="#LTM is for beginners and experienced software engineers, open source enthusiasts, and scientists interested in using TensorFlow, have fun with technology and explore growing community around it!"
            />
            <Meetups
              video={find(videos, ['title', 'trainline'])}
              name="Manchester Frontend Meetup"
              description="Manchester Frontend Meetup is a group of web developers who are passionate about sharing knowledge and promoting best practices. Each month, we will present 2-3 speakers who will discuss topics covering all things frontend."
            />
            <Meetups
              video={find(videos, ['title', 'trainline'])}
              name="Digital Product London"
              description="Digital Product London gathers top digital product minds to explore, explain and discuss challenging concepts, from product design to engineering culture."
            />
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
