import remcalc from 'remcalc';
import is from 'styled-is';

import Section from 'components/section';
import BG from 'assets/page-hero.png';

export default Section.extend`
  background: url('${props => (props.bg ? props.bg : BG)}');
  background-position: ${props =>
    props.position ? props.position : 'right top'};
  background-repeat: no-repeat;
  background-size: ${props => (props.size ? props.size : 'cover')};
  max-width: 100%;
  z-index: 0;

  ${is('height')`
    min-height: ${props => remcalc(props.height)};
  `};

  ${is('center')`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;
