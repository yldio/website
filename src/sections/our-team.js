import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3, H5, Copy } from 'components/typography';
import BulletList, { Item as BulletListItem } from 'components/bullet-list';
import Section from 'components/section';
import Video from 'components/video';
import Image from 'components/image';
import Hr from 'components/hr';

import AboutUs1 from 'assets/about-us-1.png';
import AboutUs2 from 'assets/about-us-2.png';
import AboutUs3 from 'assets/about-us-3.png';
import AboutUs4 from 'assets/about-us-4.png';
import AboutUs5 from 'assets/about-us-5.png';
import AboutUs6 from 'assets/about-us-6.png';

const AboutUsImage = ({ src }) => (
  <Col xs={6}>
    <Margin bottom={15}>
      <Image src={src} />
    </Margin>
  </Col>
);

const Person = ({ name, role, children }) => (
  <Col xs={12} md={4}>
    <H5>{name}</H5>
    <Copy>{role}</Copy>
    <Margin top={11} bottom={32}>
      {children}
    </Margin>
  </Col>
);

export default ({ video }) => (
  <Fragment>
    <Section dark data-selector="our-team:intro">
      <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 47, md: 92, lg: 130 }}>
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
                          Strong convictions, weakly held
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
    <Section data-selector="our-team:gallery">
      <Padding bottom={{ xs: 0, md: 21 }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Margin top={{ xs: 15, md: -82, lg: -120 }} bottom={24}>
                <Video src={video.file.url} controls preload="metadata" />
              </Margin>
            </Col>
            <AboutUsImage src={AboutUs1} />
            <AboutUsImage src={AboutUs2} />
            <AboutUsImage src={AboutUs3} />
            <AboutUsImage src={AboutUs4} />
            <AboutUsImage src={AboutUs5} />
            <AboutUsImage src={AboutUs6} />
          </Row>
        </Grid>
      </Padding>
    </Section>
    <Section>
      <Grid>
        <Hr />
      </Grid>
    </Section>
    <Section data-selector="our-team:people">
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
            <Person name="Nuno Job" role="CEO">
              <Copy>
                Nuno was previously the Chief Commercial at Nodejitsu where he
                was responsible for the world&apos;s largest Node.js cloud and
                provided extensive contributions to the success of Node.js.
                Nuno&apos;s formative work years were spent in the U.S. at IBM
                Research and MarkLogic. He is a proud Sequoia alumni.
              </Copy>
            </Person>
            <Person name="Anthony Mann" role="Co-Founder">
              <Copy>
                Anthony worked at Apple, enabling their next generation of web
                products and web marketing, and established many of the
                practises we now know as Design Systems. In his spare time he is
                a mentor for startups at Techstars, gives talks on product and
                design, and has even curated an exhibition with the Tate.
              </Copy>
            </Person>
            <Person name="Fábio Oliveira" role="CEO, AddCode">
              <Copy>
                Computer Science Graduate Software Engineer (9+ years) Pragmatic
                Analyst and Problem Solver (29+ years) Focused on Portuguese
                companies operations and finance (2+ years) Currently managing
                operations of YLD Portugal companies.
              </Copy>
            </Person>
            <Person name="Hema Patel" role="COO">
              <Copy>
                Hema provides strategic oversight of all operational functions
                and leads company growth. She is a senior executive who brings
                25 years of experience in both strategy and global director
                positions at Adobe, Facebook, Microsoft and spent 12 years in
                publishing, leading commercial teams at News Corp and the FT.
                Mentor at Microsoft Accelerator.
              </Copy>
            </Person>
            <Person name="Bradley Stott" role="CCO">
              <Copy>
                Bradley oversees client relationships, business development,
                partnerships and the talent function of YLD. Previously he was
                managing teams in the technology recruitment world focussing on
                cutting edge technologies where he helped build many highly
                skilled software engineering teams across London.
              </Copy>
            </Person>
            <Person name="Tracey Maisuria" role="CFO">
              <Copy>
                Tracey is responsible for all financial internal controls and
                provides strategic recommendations to leadership based on
                financial analysis and projections, and revenue/expense
                analysis. Previously Tracey worked at both the Royal Society and
                the British Safety Council, and is a Stanford alumni.
              </Copy>
            </Person>
            <Person name="Carlos Vilhena" role="VP, Engineering">
              <Copy />
            </Person>
            <Person name="Gareth Scrivens" role="Associate Partner">
              <Copy />
            </Person>
            <Person name="Greta Strolyte" role="Marketing Manager">
              <Copy />
            </Person>
            <Person name="Rachel Israel" role="People Manager">
              <Copy />
            </Person>
            <Person name="Naomi White" role="Business Manager">
              <Copy />
            </Person>
            <Person name="Malika Kenzhebaeva" role="Finance Manager">
              <Copy />
            </Person>
            <Person name="Sara Vieira" role="Developer Avocado">
              <Copy />
            </Person>
            <Person name="Tom Gallacher" role="Staff Engineer">
              <Copy />
            </Person>
            <Person name="Sergio Ramos" role="Engineer">
              <Copy />
            </Person>
            <Person name="Joaquim Serafim" role="Principal Consultant">
              <Copy />
            </Person>
            <Person name="Albert Kang" role="Principal Consultant">
              <Copy />
            </Person>
            <Person name="Ray Brooks" role="Principal Consultant">
              <Copy />
            </Person>
            <Person name="Inayaili de León" role="Principal Consultant">
              <Copy />
            </Person>
            <Person name="Julie Coassin" role="Principal Consultant">
              <Copy />
            </Person>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
