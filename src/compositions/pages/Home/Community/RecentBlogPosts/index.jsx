import React from 'react';
import Post from '../../../../../components/Post';
import { BlogPost, BlogPosts } from './styled';

const RecentBlogPosts = () => (
  <BlogPosts>
    <BlogPost>
      <Post
        date="2018-05-18T14:38:23.996+01:00"
        image="https://placekitten.com/128/128"
        sourceLink="/people/nuno-job"
        sourceText="Nuno Job"
        title="We’re Hiring! YLD on the look out for Front-End Devs and DevOps."
      >
        I think its one of the simplest yet most powerful extensions inVision
        hasn&apos;t launched. As animation and transition in inVision evolve it
        should grow even more powerful
      </Post>
    </BlogPost>
    <BlogPost>
      <Post
        date="2018-05-18T14:38:23.996+01:00"
        image="https://placekitten.com/128/128"
        sourceLink="/people/nuno-job"
        sourceText="Nuno Job"
        title="We’re Hiring! YLD on the look out for Front-End Devs and DevOps."
      >
        I think its one of the simplest yet most powerful extensions inVision
        hasn&apos;t launched. As animation and transition in inVision evolve it
        should grow even more powerful
      </Post>
    </BlogPost>
  </BlogPosts>
);

export default RecentBlogPosts;
