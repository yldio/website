import React from 'react';
import Post from 'components/Post';
import { Event, Events, Title } from './styled';

import Button from 'components/Button';
import Link from 'components/Link';

const UpcomingEvents = () => (
  <section>
    <header>
      <Title>Upcoming Events</Title>
    </header>
    <Events>
      <Event>
        <Post
          date="2018-05-18T14:38:23.996+01:00"
          image="https://placekitten.com/128/128"
          sourceLink="/events/digital-product-london"
          sourceText="Digital Product London"
          title="We’re Hiring! YLD on the look out for Front-End Devs and DevOps."
        >
          I think its one of the simplest yet most powerful extensions inVision
          hasn&apos;t launched.
        </Post>
      </Event>
      <Event>
        <Post
          date="2018-05-18T14:38:23.996+01:00"
          image="https://placekitten.com/128/128"
          sourceLink="/events/digital-product-london"
          sourceText="Digital Product London"
          title="We’re Hiring! YLD on the look out for Front-End Devs and DevOps."
        >
          I think its one of the simplest yet most powerful extensions inVision
          hasn&apos;t launched.
        </Post>
      </Event>
      <Event>
        <Post
          date="2018-05-18T14:38:23.996+01:00"
          image="https://placekitten.com/128/128"
          sourceLink="/events/digital-product-london"
          sourceText="Digital Product London"
          title="We’re Hiring! YLD on the look out for Front-End Devs and DevOps."
        >
          I think its one of the simplest yet most powerful extensions inVision
          hasn&apos;t launched.
        </Post>
      </Event>
    </Events>
    <Button component={Link} href="/events">
      View Events
    </Button>
  </section>
);

export default UpcomingEvents;
