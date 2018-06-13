import styled from 'styled-components';

import DefaultContainer from 'components/Container';
import { footerText, textBlue } from 'styles/colours';
import { spacing } from 'styles/spacing';

export const Container = DefaultContainer.withComponent('section').extend`
  padding-bottom: ${spacing(5)};
  padding-top: ${spacing(7)};
`;

export const StyledFooter = styled.footer`
  background-color: ${textBlue};
  color: ${footerText};
`;
