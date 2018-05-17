import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <Fragment>
    <Helmet
      title="YLD | Not Found"
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Fragment>
);

export default NotFoundPage;
