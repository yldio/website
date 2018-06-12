import React, { Fragment } from 'react';

import PageHero from 'components/PageHero';
import ProductList from 'compositions/ProductList';
import Container from 'components/Container';
import { H2, H5, Copy } from 'components/Typography';

import { Section, ServicesList, ApproachHeader, Row } from './styled';
import Challenges from './Challenges/index';

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
    <section data-selector="services:approach">
      <ApproachHeader>
        <Container>
          <H2 white slim>
            Our Approach
          </H2>
        </Container>
      </ApproachHeader>
      <Container>
        <Row>
          <H5>Consultancy</H5>
          <Copy>
            We help you realise the full potential of your engineering and
            delivery capability.
            <br />
            <br />
            We use our capability model to help you gauge your organisation’s
            current maturity and help you identify any gaps and opportunities
            for improvement in line with your vision.
            <br />
            <br />
            We use our best practice models of discovery and delivery to drive
            success and ensure you have the right skills, processes and tools.
            What’s more we help you build the right framework to develop a long
            lasting engineering culture. We bring excellence, fast, and we
            ultimately save our clients millions of pounds in licensing fees.
          </Copy>
        </Row>
      </Container>
    </section>
  </Fragment>
);

export default ServicesPage;
