import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import ServicesPage from 'compositions/pages/Services';

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
    <ServicesPage />
  </Fragment>
);

export default Services;
