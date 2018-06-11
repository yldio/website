import React, { Fragment } from 'react';

import BuildBetter from './BuildBetter';
import CaseStudies from './CaseStudies';
import Industries from './Industries';
import WeEnable from './WeEnable';
import HowWeDoIt from './HowWeDoIt';
import Community from './Community';
import ServicesAboutUs from './ServicesAboutUs';

const HomePage = () => (
  <Fragment>
    <BuildBetter />
    <CaseStudies />
    <Industries />
    <WeEnable />
    <HowWeDoIt />
    <Community />
    <ServicesAboutUs />
  </Fragment>
);

export default HomePage;
