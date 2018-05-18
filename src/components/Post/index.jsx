import React from 'react';
import styled from 'styled-components';

import Panel, { panelPadding } from '../Panel';
import Rule from '../Rule';

const PostRule = styled(Rule)`
  margin: ${panelPadding} -${panelPadding};
`;

const Post = ({ title, body, image, event, date }) => (
  <Panel>
    <PostRule />
  </Panel>
);

export default Post;
