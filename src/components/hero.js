import remcalc from 'remcalc';
import is from 'styled-is';

import Section from 'components/section';
import BG from 'assets/page-hero.png';

export default Section.extend`
  background: url('${props => (props.bg ? props.bg : BG)}');
  background-position: left top;
  background-size: cover;
  min-height: ${props => remcalc(props.height ? props.height : '470')};
  max-width: 100%;
  z-index: 0;

  ${is('center')`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;
