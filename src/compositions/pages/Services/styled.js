import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import BG from './header.png';

export const Section = styled(PageSection)`
    background: url('${BG}');
    background-position: left top;
    background-size: 100% 100%;
    margin: 0;
    max-width: 100%;
    padding-top: ${remcalc(230)};
    margin-top: ${remcalc(-130)};
    z-index: 0;
    position: relative;
    padding-bottom: ${remcalc(141)};
`;

export const ServicesList = styled(PageSection)`
  margin-top: ${remcalc(-90)};
  box-shadow: ${remcalc(10)} ${remcalc(12)} ${remcalc(40)} ${remcalc(5)}
    rgba(25, 5, 52, 0.15);
  padding-bottom: 0;
`;
