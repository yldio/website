import styled from 'styled-components';
import remcalc from 'remcalc';

export default styled.hr`
  height: ${remcalc(1)};
  background-color: ${props => props.theme.colors.lavender};
`;
