import React, { Fragment } from 'react';

import PageSection from 'components/PageSection';
import PageHero from 'components/PageHero';
import ProductList from 'compositions/ProductList';
import WorkWithUs from 'compositions/WorkWithUs';

import ServiceList from './ServiceList';
import Tiles from './Tiles';

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
    <PageSection gradient>
      <ProductList />
    </PageSection>
    <ServiceList />
    <Tiles />
    <WorkWithUs />
  </Fragment>
);

export default ServicesPage;
