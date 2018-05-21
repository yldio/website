import React, { Fragment } from 'react';

import BuildBetter from './BuildBetter';
import CaseStudies from './CaseStudies';
import Industries from './Industries';
import WeEnable from './WeEnable';
import HowWeDoIt from './HowWeDoIt';
import Community from './Community';
import ServicesAboutUs from './ServicesAboutUs';
import WorkWithUs from './WorkWithUs';

const HomePage = () => (
  <Fragment>
    <BuildBetter />
    <CaseStudies />
    <Industries />
    <WeEnable />
    <HowWeDoIt />
    <Community />
    <ServicesAboutUs />
    <WorkWithUs />
  </Fragment>
);

export default HomePage;
