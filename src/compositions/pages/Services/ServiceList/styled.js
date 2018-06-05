import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import DefaultLink from 'components/Link';

export const Illustration = styled.img`
  display: block;
  margin: ${spacing(5)} auto;
  width: 80%;
`;

export const Link = styled(DefaultLink)`
  font-size: 1.25rem;
  display: block;
  margin-top: ${spacing(3)};
`;
