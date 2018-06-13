import React from 'react';
import PropTypes from 'prop-types';

import { List, Tag } from './styled';

const TagList = ({ tags }) => (
  <List>{tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</List>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;
