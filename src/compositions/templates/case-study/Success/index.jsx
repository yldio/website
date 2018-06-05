import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { H2, Copy } from 'components/Typography';

const Success = ({ main, sub }) => (
  <Fragment>
    <H2>The Success</H2>
    <Copy large newLines>
      {main}
    </Copy>
    <Copy newLines>{sub}</Copy>
  </Fragment>
);

Success.propTypes = {
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Success;
