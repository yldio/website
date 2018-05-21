import React from 'react';

import IndustryGrid from './IndustryGrid';
import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

const Industries = () => (
  <PageSection>
    <PageSectionHeader
      description="We’re proud to work with some amazing clients. No matter how big or small, their trust and collaboration allow us meticulous plan, craft and build their technology future."
      title="Industries"
    />
    <IndustryGrid />
  </PageSection>
);

export default Industries;
