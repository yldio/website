import React from 'react';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import { Copy } from 'components/Typography';

import { Img, Title } from './styled';

const Picture = ({ picture, name, title, twitter, linkedin, children }) => (
  <li>
    <Img src={picture} alt={name} width="180" height="180" />
    <Copy bold> {name}</Copy>
    <Title> {title}</Title>
    <Copy> {children}</Copy>
    <Copy>
      <Link href={twitter} target="_blank">
        Twitter
      </Link>
    </Copy>
    <Copy>
      <Link href={linkedin} target="_blank">
        LinkedIn
      </Link>
    </Copy>
  </li>
);

export default Picture;

Picture.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};
