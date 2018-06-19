import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { H3, H4 } from 'components/typography';
import Section from 'components/section';
import Card from 'components/card';
import BulletList, { Item as BulletListItem } from 'components/bullet-list';
import Hero from 'components/hero';

export default () => (
  <Fragment>
    <Hero height="350">
      <Padding top={50}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <H4 whiter decorated>
                We bring you the latest techniques to help you meet your
                challenges:
              </H4>
            </Col>
          </Row>
        </Grid>
      </Padding>
    </Hero>
    <Section dark>
      <Padding bottom={{ xs: 9, md: 36 }}>
        <Grid>
          <Row around="xs" top="xs">
            <Col xs={12} md={4}>
              <Margin top={{ xs: 15, md: -39 }}>
                <Card
                  title="YLD Delivers"
                  points={['Lean culture', 'Micro-services']}
                />
              </Margin>
            </Col>
            <Col xs={12} md={4}>
              <Margin top={{ xs: 15, md: -39 }}>
                <Card
                  title="Leveraging"
                  points={['Vertical teams', 'Open source software']}
                />
              </Margin>
            </Col>
            <Col xs={12} md={4}>
              <Margin top={{ xs: 15, md: -39 }}>
                <Card
                  title="Enabling"
                  points={[
                    'Experimentation',
                    'Continuous delivery with zero downtime'
                  ]}
                />
              </Margin>
            </Col>
          </Row>
          <Margin top={{ xs: 15, md: 36 }} inline>
            <Row>
              <Col xs={12}>
                <H3 whiter decorated>
                  To bring you business value
                </H3>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12} md={6} lg={3}>
                    <BulletList first>
                      <BulletListItem white>
                        Utilise disruptive technology
                      </BulletListItem>
                      <BulletListItem white>
                        Stay lean and compete
                      </BulletListItem>
                    </BulletList>
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <BulletList>
                      <BulletListItem white>Transform</BulletListItem>
                      <BulletListItem white>Innovate</BulletListItem>
                    </BulletList>
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <BulletList>
                      <BulletListItem white>
                        Speed of delivery and efficiency
                      </BulletListItem>
                      <BulletListItem white>
                        Bridge the skills gap
                      </BulletListItem>
                    </BulletList>
                  </Col>
                  <Col xs={12} md={6} lg={3}>
                    <BulletList>
                      <BulletListItem white>Mitigate risk</BulletListItem>
                      <BulletListItem white>Lower cost</BulletListItem>
                    </BulletList>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Margin>
        </Grid>
      </Padding>
    </Section>
  </Fragment>
);
