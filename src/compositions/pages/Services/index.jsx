import React, { Fragment } from 'react';

import PageHero from 'components/PageHero';
import ProductList from 'compositions/ProductList';
import WorkWithUs from 'compositions/WorkWithUs';

import ServiceList from './ServiceList';
import Tiles from './Tiles';
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
    <Tiles />
    <WorkWithUs />
  </Fragment>
);

export default ServicesPage;
