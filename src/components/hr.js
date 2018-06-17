import styled from 'styled-components';
import remcalc from 'remcalc';

export default styled.hr`
  display: block;
  height: ${remcalc(1)};
  border: 0;
  border-top: 1px solid ${props => props.theme.colors.lavender};
  margin: 0;
  padding: 0;
`;
