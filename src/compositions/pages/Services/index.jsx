import React, { Fragment } from 'react';

import PageSection from 'components/PageSection';
import PageHero from 'components/PageHero';
import PageRule from 'components/PageRule';
import ProductList from 'compositions/ProductList';

const ServicesPage = () => (
  <Fragment>
    <PageSection>
      <PageHero
        before="services"
        title="Great companies go beyond their customers expectations, over and over again."
      >
        We enable your organisation to deliver world-class technology and user
        experiences, long after we leave.
      </PageHero>
    </PageSection>
    <PageSection>
      <ProductList />
      <PageRule />
    </PageSection>
  </Fragment>
);

export default ServicesPage;
