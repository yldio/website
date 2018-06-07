import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import AboutUs from './../compositions/pages/AboutUs';

const Services = () => (
  <Fragment>
    <Helmet
      title="YLD | About Us"
      meta={[
        { name: 'description', content: 'YLD Services' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <AboutUs />
  </Fragment>
);

export default Services;
