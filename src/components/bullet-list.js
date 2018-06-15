import styled from 'styled-components';
import remcalc from 'remcalc';

import { Copy } from 'components/typography';

export default styled.ul`
  margin-top: ${remcalc(31)};
`;

export const Item = Copy.withComponent('li').extend`
  margin-bottom: ${remcalc(31)};

  &:before {
    content: '•';
    margin-right: ${remcalc(18)};
    color: ${props => props.theme.colors.deeppink};
    display: inline-block;
  }
`;
