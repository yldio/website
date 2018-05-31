import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Main, Sub, Title } from './styled';

const Success = ({ main, sub }) => (
  <Fragment>
    <Title>The Success</Title>
    <Main>{main}</Main>
    <Sub>{sub}</Sub>
  </Fragment>
);

Success.propTypes = {
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Success;
