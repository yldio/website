import styled from 'styled-components';
import remcalc from 'remcalc';

import PageSection from 'components/PageSection';
import BG from '../../../assets/page-hero.png';
import approach from './assets/approach.png';

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

export const ApproachHeader = styled.section`
    background: url('${approach}');
    background-position: left top;
    background-size: cover;
    height: ${remcalc(460)};
    padding-top: ${remcalc(300)}
`;

export const Row = styled.div`
  display: flex;
  margin: ${remcalc(80)} 0;

  & > * {
    width: 50%;
  }
`;
