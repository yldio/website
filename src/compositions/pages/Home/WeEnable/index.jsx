import React from 'react';

import CheckList, { Item } from '../../../../components/CheckList';
import PageSection from '../../../../components/PageSection';
import PageSectionHeader from '../../../../components/PageSectionHeader';
import PageRule from '../../../../components/PageRule';

const WeEnable = () => (
  <PageSection>
    <PageSectionHeader title="We enable you to..." />
    <CheckList>
      <Item>Build custom software solutions that become an asset</Item>
      <Item>
        Deliver the right user experience at the right time, on the right
        channel
      </Item>
      <Item>Transform, innovate and differentiate at speed</Item>
      <Item>
        Grow capability inside your organisation - consulting, training, pairing
        and education
      </Item>
      <Item>
        Adopt cutting edge technologies - We&apos;re pioneers in Node.js, React
        and Design Systems
      </Item>
      <Item>Grow a technology culture</Item>
    </CheckList>
    <PageRule />
  </PageSection>
);

export default WeEnable;
