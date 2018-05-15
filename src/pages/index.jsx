import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import HomePage from '../compositions/pages/Home';

const IndexPage = () => (
  <Fragment>
    <Helmet
      title="YLD | Home"
      meta={[
        { name: 'description', content: 'YLD Homepage' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <HomePage />
  </Fragment>
);

export default IndexPage;
