import React, { Fragment } from 'react';

import PageHero from 'components/PageHero';
import ProductList from 'compositions/ProductList';
import Container from 'components/Container';

import { Section, ServicesList } from './styled';
import Challenges from './Challenges/index';
import Approach from './Approach/index';

const ServicesPage = () => (
  <Fragment>
    <Section data-selector="services:hero">
      <Container>
        <PageHero before="Services" white big>
          We enable your organisation to deliver world-class technology and user
          experiences, long after we leave.
        </PageHero>
      </Container>
    </Section>
    <ServicesList data-selector="services:table">
      <ProductList />
    </ServicesList>
    <Challenges />
    <Approach />
  </Fragment>
);

export default ServicesPage;
