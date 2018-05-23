import React from 'react';

import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';

import IndustryGrid from './IndustryGrid';

const Industries = () => (
  <PageSection data-selector="home:industries" gradient>
    <PageSectionHeader
      description="We’re proud to work with some amazing clients. No matter how big or small, their trust and collaboration allow us meticulous plan, craft and build their technology future."
      title="Industries"
    />
    <IndustryGrid />
  </PageSection>
);

export default Industries;
