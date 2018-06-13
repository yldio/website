import React from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import Button from 'components/Button';
import { H1 } from 'components/Typography';
import PageHero from 'components/PageHero';
import { Section } from 'components/PageHero';

import { Paragraph } from './styled';

const BuildBetter = () => (
  <Section data-selector="home:build-better">
    <Grid>
      <Row>
        <PageHero title={<H1 lighter>Innovation at the core, together</H1>}>
          <Paragraph lighter>
            We enable the worlds leading enterprises to drive digital
            transformation and define their technology future through strategy,
            design and custom software engineering.
          </Paragraph>
          <Paragraph>
            <Button href="/services">Our Services</Button>
          </Paragraph>
        </PageHero>
      </Row>
    </Grid>
  </Section>
);

export default BuildBetter;
