import React from 'react';

import Button from 'components/Button';
import PageSection from 'components/PageSection';
import { Body, Illustration1, Illustration2, Title } from './styled';

const BuildBetter = () => (
  <PageSection>
    <Title>Build better</Title>
    <Body>
      Great companies go beyond their customers expectations, over and over
      again. Building this capability in your company is our mission, and our
      promise.
    </Body>
    <Body>
      We enable your organisation to deliver world-class technology and customer
      experiences.
    </Body>
    <Button href="#case-studies">Case Studies ↓</Button>
    <Illustration1 />
    <Illustration2 />
  </PageSection>
);

export default BuildBetter;
