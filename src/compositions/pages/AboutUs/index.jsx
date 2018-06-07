import React, { Fragment } from 'react';
import PageHero from 'components/PageHero';
import PageSection from 'components/PageSection';
import { Copy, H2 } from 'components/Typography';
import Person from './Person';
import { People } from './styled';

import nuno from './Person/nuno.png';

export default () => (
  <Fragment>
    <PageSection data-selector="about-us:hero">
      <PageHero
        before="about us"
        title="Being a great technology focused company is hard. We get it."
      >
        Adopting a rapid, quality focused approach to building and maintaining
        your core technology, scaling a world-class user-experience and brand,
        and releasing value to your customers and your employees at a fast pace
        is a challenge, and this is only getting faster.
      </PageHero>
    </PageSection>
    <PageSection data-selector="about-us:our-team">
      <H2>Our Team</H2>

      <Copy>
        We have team members from a broad spectrum of backgrounds and incredible
        technology companies.
      </Copy>
    </PageSection>
    <PageSection data-selector="about-us:team">
      <People>
        <Person
          picture={nuno}
          name="Nuno Job"
          title="Founder + Director"
          twitter="https://twitter.com/dscape"
          linkedin="https://twitter.com/dscape"
        >
          Nuno is the founder and director at YLD. The previous CCO at
          Nodejitsu, Nuno was responsible for business development and sales in
          the world’s largest Node.js cloud. Now, he leads the YLD team and
          inspires all the creative minds that make up the company.
        </Person>
        <Person
          picture={nuno}
          name="Nuno Job"
          title="Founder + Director"
          twitter="https://twitter.com/dscape"
          linkedin="https://twitter.com/dscape"
        >
          Nuno is the founder and director at YLD. The previous CCO at
          Nodejitsu, Nuno was responsible for business development and sales in
          the world’s largest Node.js cloud. Now, he leads the YLD team and
          inspires all the creative minds that make up the company.
        </Person>
        <Person
          picture={nuno}
          name="Nuno Job"
          title="Founder + Director"
          twitter="https://twitter.com/dscape"
          linkedin="https://twitter.com/dscape"
        >
          Nuno is the founder and director at YLD. The previous CCO at
          Nodejitsu, Nuno was responsible for business development and sales in
          the world’s largest Node.js cloud. Now, he leads the YLD team and
          inspires all the creative minds that make up the company.
        </Person>
      </People>
    </PageSection>
    <PageSection data-selector="about-us:our-values">
      <H2>Our Values</H2>

      <Copy light>
        We help you future proof your business though a new style of consulting,
        ground up. We connect and educate engineering, product and leadership to
        help you navigate digital transformation, grow your business and tackle
        core customer problems. We’re one of the most renowned technology
        companies in Europe.
      </Copy>
      <Copy>
        Some amazing support copy with go here to reenforce whatever section it
        is relevant too. Some amazing support copy with go here to reenforce
        whatever section it is relevant too. Some amazing support copy with go
        here to reenforce whatever section it is relevant too. Some amazing
        support copy with go here to reenforce whatever section it is relevant
        too.
      </Copy>
    </PageSection>
  </Fragment>
);
