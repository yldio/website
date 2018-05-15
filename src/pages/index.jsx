import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const IndexPage = () => (
  <Fragment>
    <Helmet
      title="YLD | Home"
      meta={[
        { name: 'description', content: 'YLD Homepage' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
  </Fragment>
);

export default IndexPage;
