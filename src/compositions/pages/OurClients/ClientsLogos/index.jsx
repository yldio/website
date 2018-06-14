import React from 'react';
import PageSection from 'components/PageSection';
import { Grid, Header, Line, LogoWrapper, Image } from './styled';
import Hive from './Logos/hive.png';
import Economist from './Logos/economist.png';
import Tate from './Logos/tate.png';
import Discovery from './Logos/discovery.png';
import Canon from './Logos/canon.png';
import SamsungJoyen from './Logos/samsung-joyent.png';
import Kingfisher from './Logos/kingfisher.png';
import Trainline from './Logos/trainline.png';
import Conde from './Logos/conde-nas.png';
import Microsoft from './Logos/microsoft.png';
import Newsuk from './Logos/newsuk.png';
import Google from './Logos/google.png';
import Thomascook from './Logos/thomascook.png';
import Compare from './Logos/compare-market.png';
import Solera from './Logos/solera.png';
import Skype from './Logos/skype.png';
import Tes from './Logos/tes.png';
import Perform from './Logos/perform.png';
import Lamassu from './Logos/lamassu.png';

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
  Perform,
  Lamassu,
];

const ClientsLogos = () => (
  <PageSection>
    <Header>Who we work with</Header>
    <Line />
    <Grid>
      {logos.map(logo => (
        <LogoWrapper>
          <Image alt="" src={logo} />
        </LogoWrapper>
      ))}
    </Grid>
  </PageSection>
);

export default ClientsLogos;
