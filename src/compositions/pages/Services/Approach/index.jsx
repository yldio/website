import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import { H2, H5, Copy } from 'components/Typography';
import styled from 'styled-components';
import remcalc from 'remcalc';

import approach from '../assets/approach.png';

export const Header = styled.section`
  background: url('${approach}');
  background-position: left top;
  background-size: cover;
  height: ${remcalc(460)};
  padding-top: ${remcalc(300)}
`;

const Approach = () => (
  <section data-selector="services:approach">
    <Header>
      <Grid>
        <H2 lighter>Our Approach</H2>
      </Grid>
    </Header>
  </section>
);

export default Approach;
