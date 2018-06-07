import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const Services = () => (
  <Fragment>
    <Helmet
      title="YLD | Services"
      meta={[
        { name: 'description', content: 'YLD Services' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <h1>Sup </h1>
  </Fragment>
);

export default Services;
