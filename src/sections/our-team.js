import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3, H5, Copy } from 'components/typography';
import BulletList, { Item as BulletListItem } from 'components/bullet-list';
import Section from 'components/section';

const Person = ({ name, role, children }) => (
  <Col xs={12} md={4}>
    <H5>{name}</H5>
    <Copy>{role}</Copy>
    <Margin top={11} bottom={32}>
      {children}
    </Margin>
  </Col>
);

export default () => (
  <Fragment>
    <Section dark>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <H3 whiter decorated>
                Our Team
              </H3>
            </Col>
            <Col xs={12} md={8}>
              <H5>Our mindset</H5>
              <Row>
                <Col xs={12}>
                  <Row>
                    <Col xs={12} md={6}>
                      <BulletList first>
                        <BulletListItem white>Think differently</BulletListItem>
                        <BulletListItem white>Clients win</BulletListItem>
                        <BulletListItem white>
                          Silicon Valley mindset
                        </BulletListItem>
                        <BulletListItem white>
                          Begin again, never give up
                        </BulletListItem>
                        <BulletListItem white>
                          Strong convictions, weaklyheld
                        </BulletListItem>
                      </BulletList>
                    </Col>
                    <Col xs={12} md={6}>
                      <BulletList>
                        <BulletListItem white>
                          Everyone sweeps the floor
                        </BulletListItem>
                        <BulletListItem white>
                          Good enough to be dangerous
                        </BulletListItem>
                        <BulletListItem white>
                          Ask for forgiveness, not permission
                        </BulletListItem>
                        <BulletListItem white>Pockets of talent</BulletListItem>
                        <BulletListItem white>
                          Create future growth
                        </BulletListItem>
                      </BulletList>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Section>
    <Section>
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 0, md: 36 }}>
        <Grid>
          <Margin bottom={40}>
            <Row>
              <Col xs={12} md={6}>
                <H3 decorated>Our Exec. Team</H3>
              </Col>
              <Col xs={12} md={6}>
                <Copy>
                  We are people who like to work out new ways of doing things
                  together. We value teamwork over the individual, and our
                  philosophy is to think differently, work lean with a silicon
                  valley mindset and iteratively explore how things could work.
                </Copy>
              </Col>
            </Row>
          </Margin>
          <Row>
            <Person name="Nuno Job" role="Founder + Director">
              <Copy>
                Nuno Job (YLD, MCS) is the CEO of YLD, our top tier technology
                consultancy that helps top CIOs/CTOs to respond to the Innovator
                &apos;s Dilemma. Previously he was Chief Commercial at Nodejitsu
                where he was responsible for the world &apos;s largest Node.js
                cloud and provided extensive contributions to the success of
                Node.js as an enterprise-ready technology. Nuno &apos;s
                formative work years were spent in the U.S. at IBM Research and
                MarkLogic. He is a proud Sequoia alumni and a big advocate and
                enabler of open-source software.
              </Copy>
            </Person>
            <Person name="Anthony Mann" role="Founder + Director">
              <Copy>
                Anthony is Design Partner and Co-Founder of YLD. He’s previously
                founded Make Us Proud - a design thinking product consultancy
                that enables companies to innovate rapidly, deliver disruptive
                products and drive exceptional customer experiences. Make Us
                Proud joined forces with YLD in 2017. Prior to this, Anthony
                worked at Apple, enabling their next generation of web products
                and web marketing, and established many of the practises we now
                know as Design Systems. In his spare time he is a mentor for
                startups at Techstars, gives talks on product and design, and
                has even curated an exhibition with the Tate.
              </Copy>
            </Person>
            <Person name="Fábio Oliveira" role="CEO of AddCode">
              <Copy>
                Learning addict, pathologically curious. Photographs stuff. Star
                Wars connoisseur. Has a soft spot for cats. Computer Science
                Graduate Software Engineer (9+ years) Pragmatic Analyst and
                Problem Solver (29+ years) Focused on Portuguese companies
                operations and finance (2+ years) Currently managing operations
                of YLD Portugal companies. Specialties: Software Architecture,
                Bug Hunting
              </Copy>
            </Person>
            <Person name="Hema Patel" role="COO">
              <Copy>
                Hema serves as COO of YLD and provides strategic oversight of
                all operational functions and leads company growth. She is a
                senior executive who brings 25 years of experience in both
                strategy and global director positions at Adobe, Facebook,
                Microsoft and spent 12 years in publishing, leading commercial
                teams at News Corp and the FT. Henley business school trained
                with a degree in Accountancy. Hema is a mentor at the Microsoft
                Accelerator and a passionate sailor.
              </Copy>
            </Person>
            <Person name="Bradley Stott" role="CCO">
              <Copy>XXX</Copy>
            </Person>
            <Person name="Tracey Bianchi-Maisuria" role="CFO">
              <Copy>
                Tracey is our CFO, and Stanford educated. She is responsible for
                all financial internal controls and provides strategic
                recommendations to leadership based on financial analysis and
                projections, and revenue/expense analysis. Previously Tracey
                worked at both the Royal Society and the British Safety Council.
              </Copy>
            </Person>
            <Person name="Carlos Vilhena" role="VP Engineering">
              <Copy>
                Carlos is the VP of Engineering at YLD and leads our engineering
                team, comprising of 90 engineers across two markets. He oversees
                all technical recruitment, the engineering communities,
                developer advocacy, career development, our open source
                strategy, in addition to the technical roadmap and training.
                Carlos has experience managing engineering teams across EMEA
                markets. Prior to YLD, Carlos was a startup founder and an
                alumni of Forward Partners, a leading UK investment firm. He has
                also served as a tech lead at GDS, a Government organisation
                focusing on digital transformation and is educated to MSc level
                in Computer Science, specialising in Formal Methods.
              </Copy>
            </Person>
            <Person name="Gareth XXX" role="Associate Partner">
              <Copy>
                Danielle is the CMO of YLD. She is responsible for leading the
                marketing team across marketing strategy, PR & communications
                and customer-facing events support. Danielle brings over 25
                vears of international experience as a PR & communications
                strategist. She has held positions at Google and Ericsson and
                has consulted to Microsoft, eBay and SAP. Danielle holds an M.A.
                in Arts Criticism and Policy Management and a B.A. in English
                Literature and History of Art. She holds the CAM Foundation
                Communication Certificate and attended Ashridge Centre for
                Business and Society gaining certification in Managing Corporate
                Community Investment.
              </Copy>
            </Person>
            <Person name="Danielle Leach" role="CMO">
              <Copy>
                Gareth is YLD’s first Associate Partner and leads our
                Principals. He brings 20 years’ experience in the delivery of
                technology strategies and solutions for high profile
                international clients including Nike and Heineken. He most
                recently led growth of the Interactive Development teams at IBM
                iX. Prior to this, he was Group Technical director at AKQA
                London, for many years through to their exit. Gareth also brings
                consulting experience from Cap Gemini and software engineering
                expertise.
              </Copy>
            </Person>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
