import React, { Fragment } from 'react';

import Link from 'components/Link';
import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';
import PageRule from 'components/PageRule';
import ProductList from './ProductList';

import { Description } from './styled';

const HeaderDescription = (
  <Fragment>
    <Description>
      We thrive by working, thinking, and growing like a technology driven
      organisation. This is our mission, and our promise. Here’s how we do it:
    </Description>
    <Link href="/case-studies">Learn how we transform organisations →</Link>
  </Fragment>
);

const HowWeDoIt = () => (
  <PageSection>
    <PageSectionHeader description={HeaderDescription} title="How we do it" />
    <ProductList />
    <PageRule />
  </PageSection>
);

export default HowWeDoIt;
