import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Flex, { FlexItem } from 'styled-flex-component';
import { Padding, Margin } from 'styled-components-spacing';

import { H3 } from 'components/typography';
import Section from 'components/section';

import Hive from 'assets/hive.png';
import Economist from 'assets/economist.png';
import Tate from 'assets/tate.png';
import Discovery from 'assets/discovery.png';
import Canon from 'assets/canon.png';
import SamsungJoyen from 'assets/samsung-joyent.png';
import Kingfisher from 'assets/kingfisher.png';
import Trainline from 'assets/trainline.png';
import Conde from 'assets/conde-nas.png';
import Microsoft from 'assets/microsoft.png';
import Newsuk from 'assets/newsuk.png';
import Google from 'assets/google.png';
import Thomascook from 'assets/thomascookLogo.png';
import Compare from 'assets/compare-market.png';
import Solera from 'assets/solera.png';
import Skype from 'assets/skype.png';
import Tes from 'assets/tes.png';
import Perform from 'assets/perform.png';
import Lamassu from 'assets/lamassu.png';

const logos = [
  Hive,
  Economist,
  Tate,
  Discovery,
  Canon,
  SamsungJoyen,
  Kingfisher,
  Trainline,
  Conde,
  Microsoft,
  Newsuk,
  Google,
  Thomascook,
  Compare,
  Solera,
  Skype,
  Tes,
  Lamassu,
  Perform
];

const Logo = ({ img }) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    <Margin bottom={{ xs: 15, sm: 24 }}>
      <Flex justifyCenter alignCenter>
        <FlexItem>
          <img src={img} />
        </FlexItem>
      </Flex>
    </Margin>
  </Col>
);

export default () => (
  <Section>
    <Padding top={{ xs: 15, sm: 41 }} bottom={{ xs: 15, sm: 30 }}>
      <Grid>
        <Row>
          <Col xs={12}>
            <Margin bottom={55}>
              <H3 center decorated>
                Who we work with
              </H3>
            </Margin>
          </Col>
        </Row>
        <Row middle="xs" between="xs">
          {logos.map(img => <Logo key={img} img={img} />)}
        </Row>
      </Grid>
    </Padding>
  </Section>
);
