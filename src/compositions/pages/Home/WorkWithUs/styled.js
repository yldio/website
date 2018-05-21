import styled from 'styled-components';

import Container from 'components/Container';
import DefaultLink from 'components/Link';

import { highlight, textLight } from 'styles/colours';
import { spacing } from 'styles/spacing';

export const Section = Container.withComponent('section').extend`
  margin-bottom: ${spacing(5)};
  margin-top: ${spacing(5)};
  text-align: center;
`;

export const Title = styled.h4`
  color: ${textLight};
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
`;

export const Details = styled.p`
  color: ${highlight};
  font-size: 2.25rem;
  font-weight: 300;
  margin: 0;
`;

export const Link = styled(DefaultLink)`
  font-weight: 300;
`;
