import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Padding, Margin } from 'styled-components-spacing';

import { H3, H4, H5, Copy } from 'components/typography';
import Section from 'components/section';
import Hero from 'components/hero';

import designProductBg from 'assets/design-product-bg.png';

const Item = ({ title, children }) => (
  <Col xs={12} sm={5}>
    <Margin bottom={{ xs: 6, sm: 9 }}>{title}</Margin>
    <Margin bottom={{ xs: 24, sm: 36 }}>{children}</Margin>
  </Col>
);

export default () => (
  <Fragment>
    <Hero bg={designProductBg}>
      <Padding top={175} bottom={25}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <H3 whiter>Design & Product</H3>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Section>
      <Padding top={{ xs: 15, sm: 36 }} bottom={{ xs: 0, sm: 36 }}>
        <Grid>
          <Row>
            <Col xs={12} sm={10}>
              <Margin bottom={{ xs: 9, sm: 24 }}>
                <H4>
                  A great company continuously finds better solutions to its
                  customers biggest problems. Design is the bridge between the
                  two. Great design goes deeper than just how something looks,
                  it’s why and how it works, for your customers and for your
                  business.
                </H4>
              </Margin>
            </Col>
          </Row>
          <Row between="xs">
            <Item title={<H5>Design Leadership</H5>}>
              <Copy>
                Design Leadership helps build this voice at the centre of your
                companies process, enabling Design Thinking to drive innovation
                and quality across your organisation.
              </Copy>
            </Item>
            <Item title={<H5>Design Systems & DesignOps</H5>}>
              <Copy>
                For teams to deliver a great experience continuously, it’s
                necessary to have a toolset that enables an organisation to
                answer customer problems quickly, at high-quality and iterate
                rapidly. Design Systems put a powerful product design toolset at
                the centre of every team.
              </Copy>
            </Item>
            <Item title={<H5>Design Sprints</H5>}>
              <Copy>
                Design Sprints enable us to build a deep understanding of the
                customer problems teams are facing, and to move quickly into
                prototyping and testing assumptions and original ideas quickly.
              </Copy>
            </Item>
            <Item title={<H5>User Interface Design & Branding</H5>}>
              <Copy>
                Great UI design connects your users with your product. It’s the
                most tactile, direct interaction people will have with your
                brand, your services, and your customer experience.
              </Copy>
            </Item>
            <Item title={<H5>Research, Usability and User Experience</H5>}>
              <Copy>
                Knowing that you’re solving the right customer problems, and
                with the right user experience is key to growing your product.
                Great products dont just look good, they enable their users to
                achieve their goals effortlessly.
              </Copy>
            </Item>
          </Row>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
