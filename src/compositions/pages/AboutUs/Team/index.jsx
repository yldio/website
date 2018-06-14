import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';

import PageSection from 'components/PageSection';
import Ul, { Item as Li } from 'components/BulletList';
import { H3, H5, Copy } from 'components/Typography';

export default () => (
  <Fragment>
    <PageSection dark data-selector="services:help">
      <Grid>
        <Row>
          <Col xs={12} sm={5}>
            <H3 lighter decorated>
              Our Team
            </H3>
          </Col>
          <Col xs={12} sm={7}>
            <H5>Our mindset</H5>
            <Flex justifyBetween>
              <FlexItem>
                <Ul>
                  <Li light>Think differently</Li>
                  <Li light>Clients win</Li>
                  <Li light>Silicon Valley mindset</Li>
                  <Li light>Begin again, never give up</Li>
                  <Li light>Strong convictions, weakly held</Li>
                </Ul>
              </FlexItem>
              <FlexItem>
                <Ul>
                  <Li light>Everyone sweeps the floor</Li>
                  <Li light>Good enough to be dangerous</Li>
                  <Li light>Ask for forgiveness, not permission</Li>
                  <Li light>Pockets of talent</Li>
                  <Li light>Create future growth</Li>
                </Ul>
              </FlexItem>
            </Flex>
          </Col>
        </Row>
      </Grid>
    </PageSection>
    <PageSection data-selector="services:help">
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <H3 decorated>Our Exec. Team</H3>
          </Col>
          <Col xs={12} sm={6}>
            <Copy>
              We are people who like to work out new ways of doing things
              together. We value teamwork over the individual, and our
              philosophy is to think differently, work lean with a silicon
              valley mindset and iteratively explore how things could work.
            </Copy>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <H5>Nuno Job</H5>
            <Copy>Founder + Director</Copy>
            <Copy>
              Nuno Job (YLD, MCS) is the CEO of YLD, our top tier technology
              consultancy that helps top CIOs/CTOs to respond to the Innovator's
              Dilemma. Previously he was Chief Commercial at Nodejitsu where he
              was responsible for the world's largest Node.js cloud and provided
              extensive contributions to the success of Node.js as an
              enterprise-ready technology. Nuno's formative work years were
              spent in the U.S. at IBM Research and MarkLogic. He is a proud
              Sequoia alumni and a big advocate and enabler of open-source
              software.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Anthony Mann</H5>
            <Copy>Founder + Director</Copy>
            <Copy>
              Anthony is Design Partner and Co-Founder of YLD. He’s previously
              founded Make Us Proud - a design thinking product consultancy that
              enables companies to innovate rapidly, deliver disruptive products
              and drive exceptional customer experiences. Make Us Proud joined
              forces with YLD in 2017. Prior to this, Anthony worked at Apple,
              enabling their next generation of web products and web marketing,
              and established many of the practises we now know as Design
              Systems. In his spare time he is a mentor for startups at
              Techstars, gives talks on product and design, and has even curated
              an exhibition with the Tate.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Fábio Oliveira</H5>
            <Copy>CEO of AddCode</Copy>
            <Copy>
              Learning addict, pathologically curious. Photographs stuff. Star
              Wars connoisseur. Has a soft spot for cats. Computer Science
              Graduate Software Engineer (9+ years) Pragmatic Analyst and
              Problem Solver (29+ years) Focused on Portuguese companies
              operations and finance (2+ years) Currently managing operations of
              YLD Portugal companies. Specialties: Software Architecture, Bug
              Hunting
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Hema Patel</H5>
            <Copy>COO</Copy>
            <Copy>
              Hema serves as COO of YLD and provides strategic oversight of all
              operational functions and leads company growth. She is a senior
              executive who brings 25 years of experience in both strategy and
              global director positions at Adobe, Facebook, Microsoft and spent
              12 years in publishing, leading commercial teams at News Corp and
              the FT. Henley business school trained with a degree in
              Accountancy. Hema is a mentor at the Microsoft Accelerator and a
              passionate sailor.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Bradley Stott</H5>
            <Copy>CCO</Copy>
            <Copy>XXX</Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Tracey Bianchi-Maisuria</H5>
            <Copy>CFO</Copy>
            <Copy>
              Tracey is our CFO, and Stanford educated. She is responsible for
              all financial internal controls and provides strategic
              recommendations to leadership based on financial analysis and
              projections, and revenue/expense analysis. Previously Tracey
              worked at both the Royal Society and the British Safety Council.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Carlos Vilhena</H5>
            <Copy>VP Engineering</Copy>
            <Copy>
              Carlos is the VP of Engineering at YLD and leads our engineering
              team, comprising of 90 engineers across two markets. He oversees
              all technical recruitment, the engineering communities, developer
              advocacy, career development, our open source strategy, in
              addition to the technical roadmap and training. Carlos has
              experience managing engineering teams across EMEA markets. Prior
              to YLD, Carlos was a startup founder and an alumni of Forward
              Partners, a leading UK investment firm. He has also served as a
              tech lead at GDS, a Government organisation focusing on digital
              transformation and is educated to MSc level in Computer Science,
              specialising in Formal Methods.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Gareth xxxx</H5>
            <Copy>Associate Partner</Copy>
            <Copy>
              Gareth is YLD’s first Associate Partner and leads our Principals.
              He brings 20 years’ experience in the delivery of technology
              strategies and solutions for high profile international clients
              including Nike and Heineken. He most recently led growth of the
              Interactive Development teams at IBM iX. Prior to this, he was
              Group Technical director at AKQA London, for many years through to
              their exit. Gareth also brings consulting experience from Cap
              Gemini and software engineering expertise.
            </Copy>
          </Col>
          <Col xs={12} sm={4}>
            <H5>Danielle Leach</H5>
            <Copy>CMO</Copy>
            <Copy>
              Danielle is the CMO of YLD. She is responsible for leading the
              marketing team across marketing strategy, PR & communications and
              customer-facing events support. Danielle brings over 25 vears of
              international experience as a PR & communications strategist. She
              has held positions at Google and Ericsson and has consulted to
              Microsoft, eBay and SAP. Danielle holds an M.A. in Arts Criticism
              and Policy Management and a B.A. in English Literature and History
              of Art. She holds the CAM Foundation Communication Certificate and
              attended Ashridge Centre for Business and Society gaining
              certification in Managing Corporate Community Investment.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </PageSection>
  </Fragment>
);

// <PageSection data-selector="services:help">
//   <Grid>
//     <Cards justifyBetween>
//       <FlexItem>
//         <Card
//           title="Private Training"
//           points={[
//             'Hands-on learning experience, in-person classes',
//             'Tailoried training program delivered on-site to suit your needs',
//             'Ensures your software engineers share a baseline'
//           ]}
//         />
//       </FlexItem>
//       <FlexItem>
//         <Card
//           title="Pairing"
//           points={[
//             'Ongoing tutoring that covers all aspect of tech and product delivery',
//             'Seasoned YLD engineers and designers available to answer questions at all times',
//             'Experienced supervisio for code review'
//           ]}
//         />
//       </FlexItem>
//       <FlexItem>
//         <Card
//           title="Certification"
//           points={[
//             'Gain recognition for expertise and ability to employ best practices',
//             'Assess engineering candidates expertise and compare the results with your team’s performance'
//           ]}
//         />
//       </FlexItem>
//     </Cards>
//   </Grid>
//   <Grid>
//     <Row>
//       <Col xs={12} sm={6}>
//         <H2 decorated>
//           Our goal is never to just deliver but always to also upskill your
//           whole team.
//         </H2>
//       </Col>
//       <Col xs={12} sm={6}>
//         <Copy>
//           We are an agile, flexible and passionate team consisting of strategy,
//           design and engineering.
//           <br />
//           <br />
//           We aspire to bring you the most up-to-date technology, with the
//           minimal hassle possible.
//           <br />
//           <br />
//           We take a hands on approach in our work, engaging directly with you in
//           every stage of the development process.
//           <br />
//           <br />
//           We take ownership of the delivery of the project or we can integrate
//           at critical points with your team according to your needs.
//           <br />
//           <br />
//           We enable your organisation to deliver world-class technology and user
//           experiences, long after we leave.
//         </Copy>
//       </Col>
//     </Row>
//   </Grid>
// </PageSection>;
