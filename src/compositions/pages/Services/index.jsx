import React, { Fragment } from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import { H1 } from 'components/Typography';
import PageHero from 'components/PageHero';
import Container from 'components/Container';

import { Section, ServicesList } from './styled';
import Challenges from './Challenges/index';
import Approach from './Approach/index';
import Consultancy from './Consultancy';
import Design from './Design/index';
import Help from './Help/index';
import Engineering from './Engineering/index';
import AddCode from './AddCode/index';
import Transfer from './Transfer/index';
import Partners from './Partners/index';

import ProductList from './ProductList';

const ServicesPage = () => (
  <Fragment>
    <Section data-selector="services:hero">
      <Container>
        <Grid>
          <Row>
            <PageHero title={<H1 lighter>Services</H1>} white big>
              We enable your organisation to deliver world-class technology and
              user experiences, long after we leave. These are the services we
              currently offer:
            </PageHero>
          </Row>
        </Grid>
      </Container>
    </Section>
    <ServicesList data-selector="services:table">
      <ProductList />
    </ServicesList>
    <Challenges />
    <Approach />
    <Consultancy />
    <Help />
    <Design />
    <Engineering />
    <AddCode />
    <Transfer />
    <Partners />
  </Fragment>
);

export default ServicesPage;
