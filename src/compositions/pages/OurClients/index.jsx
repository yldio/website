import React, { Fragment } from 'react';
import PageHero from 'components/PageHero';
import Container from 'components/Container';
import CaseStudyItem from '../../../components/CaseStudyItem';

import { Section } from './styled';

const caseStudiesArray = require('./case-studies');

const OurClients = () => (
  <Fragment>
    <Section data-selector="our-clients:hero">
      <Container>
        <PageHero before="Our Clients" white big>
          We’re proud to work with some amazing clients who are as passionate
          about their industries as we are about helping them build their
          technology futures.
        </PageHero>
      </Container>
    </Section>
    {caseStudiesArray.map(item => (
      <CaseStudyItem
        key={item.name}
        name={item.name}
        objective={item.objective}
        imagePath={item.imagePath}
        imageAlt={item.imageAlt}
        headlineBgColour={item.headlineBgColour}
        headlineTextColour={item.headlineTextColour}
        tagline={item.tagline}
        challenges={item.challenges}
        results={item.results}
        video={item.video}
        videoPath={item.videoPath}
      />
    ))}
  </Fragment>
);

export default OurClients;
