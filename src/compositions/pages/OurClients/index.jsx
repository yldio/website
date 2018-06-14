import React, { Fragment } from 'react';
import PageHero from 'components/PageHero';
import Container from 'components/Container';

import { Section } from './styled';
import ClientsLogos from './ClientsLogos';

const OurClients = () => (
  <Fragment>
    <Section data-selector="our-clients:hero">
      <Container>
        <PageHero before="Our Clients" white big>
          We’re proud to work with some amazing clients who are as passionate
          about their industries as we are about helping them build their
          technology futures.
        </PageHero>
      </Container>
    </Section>
    <ClientsLogos />
  </Fragment>
);

export default OurClients;
