import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import remcalc from 'remcalc';
import is from 'styled-is';

import { Copy } from 'components/typography';

export default styled.ul`
  ${is('first')`
    margin-top: ${remcalc(31)};
  `};

  ${breakpoint('md')`
    margin-top: ${remcalc(31)};
  `};
`;

export const Item = Copy.withComponent('li').extend`
  margin-bottom: ${remcalc(12)};

  ${breakpoint('md')`
    margin-bottom: ${remcalc(31)};
  `};


  &:before {
    content: '•';
    margin-right: ${remcalc(18)};
    color: ${props => props.theme.colors.deeppink};
    display: inline-block;
  }
`;
