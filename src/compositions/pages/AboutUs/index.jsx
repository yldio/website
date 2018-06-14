import React, { Fragment } from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';

import { H2, Copy } from 'components/Typography';
import PageHero from 'components/PageHero';
import Container from 'components/Container';

import { Section } from './styled';
import Stats from './Stats';
import Team from './Team';
import ContactUs from './ContactUs';
import JoinUs from './JoinUs';

export default () => (
  <Fragment>
    <Section data-selector="services:hero">
      <Container>
        <Grid>
          <Row>
            <PageHero title={<H2 lighter>About Us</H2>} white big>
              <Copy lighter>
                Curious thinkers, technology pioneers and custom software
                engineers. Our teams are people who want to use technology to
                build, to create digital transformation. We innovate by doing,
                working lean and sharing knowledge so everyone grows.
              </Copy>
            </PageHero>
          </Row>
        </Grid>
      </Container>
    </Section>
    <Stats />
    <Team />
    <ContactUs />
    <JoinUs />
  </Fragment>
);

// import React, { Fragment } from 'react';
// import PageHero from 'components/PageHero';
// import PageSection from 'components/PageSection';
// import { Copy, H2 } from 'components/Typography';
// import Person from './Person';
// import { People, WorkWithUs, Anchor, LinkWrapper } from './styled';
// import Values from './Values';

// import nuno from './Person/nuno.png';

// export default () => (
//   <Fragment>
//     <PageSection data-selector="about-us:hero">
//       <PageHero
//         before="about us"
//         title="Being a great technology focused company is hard. We get it."
//       >
//         Adopting a rapid, quality focused approach to building and maintaining
//         your core technology, scaling a world-class user-experience and brand,
//         and releasing value to your customers and your employees at a fast pace
//         is a challenge, and this is only getting faster.
//       </PageHero>
//     </PageSection>
//     <PageSection data-selector="about-us:our-team">
//       <H2>Our Team</H2>

//       <Copy>
//         We have team members from a broad spectrum of backgrounds and incredible
//         technology companies.
//       </Copy>
//     </PageSection>
//     <PageSection data-selector="about-us:team">
//       <People>
//         <Person
//           picture={nuno}
//           name="Nuno Job"
//           title="Founder + Director"
//           twitter="https://twitter.com/dscape"
//           linkedin="https://twitter.com/dscape"
//         >
//           Nuno is the founder and director at YLD. The previous CCO at
//           Nodejitsu, Nuno was responsible for business development and sales in
//           the world’s largest Node.js cloud. Now, he leads the YLD team and
//           inspires all the creative minds that make up the company.
//         </Person>
//         <Person
//           picture={nuno}
//           name="Nuno Job"
//           title="Founder + Director"
//           twitter="https://twitter.com/dscape"
//           linkedin="https://twitter.com/dscape"
//         >
//           Nuno is the founder and director at YLD. The previous CCO at
//           Nodejitsu, Nuno was responsible for business development and sales in
//           the world’s largest Node.js cloud. Now, he leads the YLD team and
//           inspires all the creative minds that make up the company.
//         </Person>
//         <Person
//           picture={nuno}
//           name="Nuno Job"
//           title="Founder + Director"
//           twitter="https://twitter.com/dscape"
//           linkedin="https://twitter.com/dscape"
//         >
//           Nuno is the founder and director at YLD. The previous CCO at
//           Nodejitsu, Nuno was responsible for business development and sales in
//           the world’s largest Node.js cloud. Now, he leads the YLD team and
//           inspires all the creative minds that make up the company.
//         </Person>
//       </People>
//     </PageSection>
//     <Values />
//     <WorkWithUs data-selector="about-us:work-width-us">
//       <H2>Work with us</H2>
//       <LinkWrapper>
//         <Anchor href="mailto:hello@yld.io">hello@yld.io</Anchor> /{' '}
//         <Anchor href="tel:4402035144678">+44 (0) 203 514 4678</Anchor>
//       </LinkWrapper>
//     </WorkWithUs>
//   </Fragment>
// );
