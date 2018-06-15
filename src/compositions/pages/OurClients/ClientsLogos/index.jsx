import React from 'react';
import PageSection from 'components/PageSection';
import { Grid, Header, Line, LogoWrapper, Image } from './styled';
import Hive from '../../../../assets/hive.png';
import Economist from '../../../../assets/economist.png';
import Tate from '../../../../assets/tate.png';
import Discovery from '../../../../assets/discovery.png';
import Canon from '../../../../assets/canon.png';
import SamsungJoyen from '../../../../assets/samsung-joyent.png';
import Kingfisher from '../../../../assets/kingfisher.png';
import Trainline from '../../../../assets/trainline.png';
import Conde from '../../../../assets/conde-nas.png';
import Microsoft from '../../../../assets/microsoft.png';
import Newsuk from '../../../../assets/newsuk.png';
import Google from '../../../../assets/google.png';
import Thomascook from '../../../../assets/thomascookLogo.png';
import Compare from '../../../../assets/compare-market.png';
import Solera from '../../../../assets/solera.png';
import Skype from '../../../../assets/skype.png';
import Tes from '../../../../assets/tes.png';
import Perform from '../../../../assets/perform.png';
import Lamassu from '../../../../assets/lamassu.png';

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
  Perform,
];

const ClientsLogos = index => (
  <PageSection>
    <Header>Who we work with</Header>
    <Line />
    <Grid>
      {logos.map(logo => (
        <LogoWrapper>
          <Image alt="" key={index} src={logo} />
        </LogoWrapper>
      ))}
    </Grid>
  </PageSection>
);

export default ClientsLogos;
