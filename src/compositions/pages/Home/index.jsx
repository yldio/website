import React, { Fragment } from 'react';

import BuildBetter from './BuildBetter';
import WhatDoWeDo from './WhatDoWeDo';
import CaseStudies from './CaseStudies';
import WeEnable from './WeEnable';
import Divider from './Divider';
import KnownFor from './KnownFor';
import CallOut from './CallOut';
import JoinUs from './JoinUs';

const HomePage = () => (
  <Fragment>
    <BuildBetter />
    <WhatDoWeDo />
    <CaseStudies />
    <WeEnable />
    <Divider />
    <KnownFor />
    <CallOut />
    <JoinUs />
  </Fragment>
);

export default HomePage;
