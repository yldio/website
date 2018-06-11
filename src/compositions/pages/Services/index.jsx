import React, { Fragment } from 'react';

import PageHero from 'components/PageHero';
import ProductList from 'compositions/ProductList';

import ServiceList from './ServiceList';
import { Section, ServicesList } from './styled';

const ServicesPage = () => (
  <Fragment>
    <Section data-selector="services:hero">
      <PageHero before="Services" white big>
        We enable your organisation to deliver world-class technology and user
        experiences, long after we leave.
      </PageHero>
    </Section>
    <ServicesList gradient data-selector="services:table">
      <ProductList />
    </ServicesList>
    <ServiceList />
  </Fragment>
);

export default ServicesPage;
