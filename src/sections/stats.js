import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Margin, Padding } from 'styled-components-spacing';

import { Copy, H5 } from 'components/typography';
import Section from 'components/section';
import styled from 'styled-components';
import RevenueGrowth from 'assets/revenue-growth-image.png';
import Grow from 'assets/grow-image.png';
import EngineeringTeam from 'assets/engineering-team.png';
import WordClassEngineers from 'assets/word-class-engineers.png';

const StatisticsImage = styled.img`
  width: 50%;
`;

const StatsImage = ({ src }) => (
  <Col xs={6}>
    <Margin bottom={15}>
      <StatisticsImage src={src} />
    </Margin>
  </Col>
);

export default () => (
  <Section data-selector="stats">
    <Padding top={{ xs: 15, md: 36 }} bottom={{ xs: 15, md: 36 }}>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <StatsImage src={RevenueGrowth} />
            <H5 darker>Year on year revenue growth</H5>
            <StatsImage src={Grow} />
            <H5 darker>One of the fastest growing companies in the UK</H5>
            <StatsImage src={EngineeringTeam} />
            <H5 darker>
              Our engineering team has doubled in size year on year
            </H5>
            <StatsImage src={WordClassEngineers} />
            <H5 darker>World class engineers</H5>
          </Col>
          <Col xs={12} md={6}>
            <Copy>
              YLD brings together a team of many different people — engineers,
              designers and creative thinkers — who come together to help our
              clients achieve their goals. Our experience stems from our team
              holding roles at companies including Canonical, Apple, Yahoo,
              Microsoft, and IBM.<br />
              <br />The sole focus is to create gardens — by advising our
              clients on open source technology choices years ahead of time and
              working together with them to create capabilities to support
              continued innovation.<br />
              <br />We have worked for some of the largest multinational
              enterprise companies, private clients and for government agencies
              across B2B and B2C environments. We believe our diversity makes us
              a stronger team, which helps us better serve our clients and our
              communities.
            </Copy>
          </Col>
        </Row>
      </Grid>
    </Padding>
  </Section>
);
