import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Link from '../../components/Link';

import {
  Article,
  Authored,
  Body,
  Footer,
  Header,
  PostRule,
  Time,
  Title,
  Thumbnail,
} from './styled';

const Post = ({ title, children, image, sourceText, sourceLink, date }) => (
  <Article>
    <Header>
      <Title>{title}</Title>
    </Header>
    <Body>{children}</Body>
    <PostRule />
    <Footer>
      <Thumbnail src={image} />
      <Authored>
        <Link href={sourceLink}>{sourceText}</Link>
        <Time datetime={date}>{format(date, 'MMM DD')}</Time>
      </Authored>
    </Footer>
  </Article>
);

Post.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  sourceText: PropTypes.string.isRequired,
};

Post.defaultProps = {
  children: [],
};

export default Post;