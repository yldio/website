import React from 'react';
import PropTypes from 'prop-types';

import { Main, Sub } from './styled';

// TODO success.sub should be flexible for new lines - edit the fake data in data/case-studies/trainline.yml
const Success = ({ success }) => (
  <div>
    <h2>The Success</h2>
    <Main>{success.main}</Main>
    <Sub>{success.sub}</Sub>
  </div>
);

Success.propTypes = {
  success: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Success;
