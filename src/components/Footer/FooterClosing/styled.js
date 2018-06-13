import styled from 'styled-components';

import DefaultLink from 'components/Link';
import { footerText } from 'styles/colours';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';

export const Container = styled.section`
  color: ${footerText};
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  ${breakpoints.desktop`
    flex-direction: row;
  `};
`;

export const Copyright = styled.p`
  margin-bottom: ${spacing()};
  margin-right: ${spacing(2)};
`;

export const Link = styled(DefaultLink)`
  color: ${footerText};
  font-weight: 400;
`;

export const SiteLinks = Copyright.withComponent('ul');

export const SiteLink = styled.li`
  display: inline-block;
  padding-left: ${spacing()};
  padding-right: ${spacing()};

  ${breakpoints.desktop`
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  `};
`;

export const SocialLink = SiteLink.extend`
  font-size: 2rem;
`;
