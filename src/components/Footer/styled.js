import styled from 'styled-components';

import DefaultContainer from 'components/Container';
import DefaultLink from 'components/Link';
import { footerText, textLight } from 'styles/colours';
import { spacing } from 'styles/spacing';

export const Contact = styled.li`
  width: ${100 / 3}%;
`;

export const ContactList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Line = styled.p`
  margin-bottom: ${spacing()};
  margin-top: 0;
  font-size: 1.125rem;
  font-style: normal;
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};

  font-weight: 400;
`;

export const Office = Line.withComponent('h6').extend`
  font-weight: 500;
  margin-bottom: ${spacing(2)};
`;

export const Container = DefaultContainer.withComponent('section').extend`
  padding-bottom: ${spacing(5)};
  padding-top: ${spacing(5)};
`;

export const StyledFooter = styled.footer`
  background-color: ${textLight};
  color: white;
`;
