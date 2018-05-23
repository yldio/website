import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { textLight, textLighter } from 'styles/colours';
import DefaultLink from 'components/Link';

export const Illustration = styled.img`
  display: block;
  margin: ${spacing(5)} auto;
  width: 80%;
`;

export const Title = styled.h2`
  color: ${textLight};
  font-size: 2.25rem;
  font-weight: 500;
  margin: ${spacing(3)} 0;
`;

export const Support = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  color: ${textLighter};
  margin: ${spacing(3)} 0;
`;

export const Link = styled(DefaultLink)`
  font-size: 1.25rem;
  display: block;
  margin-top: ${spacing(3)};
`;
