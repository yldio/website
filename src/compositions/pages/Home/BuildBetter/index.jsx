import React from 'react';

import Button from 'components/Button';
import PageSection from 'components/PageSection';
import PageHero from 'components/PageHero';
import { Paragraph, Title } from './styled';

const BuildBetter = () => (
  <PageSection>
    <PageHero title={<Title>Build better</Title>}>
      <Paragraph>
        Great companies go beyond their customers expectations, over and over
        again. Building this capability in your company is our mission, and our
        promise.
      </Paragraph>
      <Paragraph>
        We enable your organisation to deliver world-class technology and
        customer experiences.
      </Paragraph>
      <Button href="#case-studies">Case Studies ↓</Button>
    </PageHero>
  </PageSection>
);

export default BuildBetter;
