import React, { Fragment } from 'react';

import PageSection from '../../../../components/PageSection';
import PageSectionHeader from '../../../../components/PageSectionHeader';
import PageRule from '../../../../components/PageRule';
import ProductList from '../../../../components/ProductList';

import { Link, Description, ProductListWrapper } from './styled';

const HeaderDescription = (
  <Fragment>
    <Description>
      We thrive by working, thinking, and growing like a technology driven
      organisation. This is our mission, and our promise. Here’s how we do it:
    </Description>
    <Link to="/case-studies">Learn how we transform organisations →</Link>
  </Fragment>
);

const HowWeDoIt = () => (
  <PageSection>
    <PageSectionHeader description={HeaderDescription} title="How we do it" />
    <ProductListWrapper>
      <ProductList />
    </ProductListWrapper>
    <PageRule />
  </PageSection>
);

export default HowWeDoIt;
