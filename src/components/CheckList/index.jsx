import React from 'react';
import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { List, ListItem, Icon } from './styled';

const Item = ({ content }) => (
  <ListItem>
    <Icon icon={faCheckCircle} /> {content}
  </ListItem>
);

Item.propTypes = {
  content: PropTypes.node.isRequired,
};

const CheckList = () => (
  <List>
    <Item content="Build custom software solutions that become an asset" />
    <Item content="Deliver the right user experience at the right time, on the right channel" />
    <Item content="Transform, innovate and differentiate at speed" />
    <Item content="Grow capability inside your organisation - consulting, training, pairing and education" />
    <Item content="Adopt cutting edge technologies - We're pioneers in Node.js, React and Design Systems" />
    <Item content="Grow a technology culture" />
  </List>
);

export default CheckList;
