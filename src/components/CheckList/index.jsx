import React from 'react';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem, Icon } from './styled';

export const Item = ({ children }) => (
  <ListItem>
    <Icon icon={faCheckCircle} /> {children}
  </ListItem>
);

Item.propTypes = {
  children: PropTypes.node.isRequired
};

const CheckList = ({ children, ...props }) => (
  <List {...props}>{children}</List>
);

CheckList.propTypes = {
  children: PropTypes.arrayOf(Item)
};

CheckList.defaultProps = {
  children: []
};

export default CheckList;
