import React from 'react';

import { Details, Link, Section, Title } from './styled';

const WorkWithUs = () => (
  <Section wide>
    <Title>Work with us</Title>
    <Details>
      <Link href="mailto:hello@yld.io">hello@yld.io</Link>
      {' / '}
      <Link href="tel:+44-203-514-4678">+44 (0) 203 514 4678</Link>
    </Details>
  </Section>
);

export default WorkWithUs;
