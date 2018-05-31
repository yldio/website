import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Main, Sub, Title } from './styled';

const Success = ({ success }) => (
  <Fragment>
    <Title>The Success</Title>
    <Main>{success.main}</Main>
    <Sub>{success.sub}</Sub>
  </Fragment>
);

Success.propTypes = {
  success: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Success;
