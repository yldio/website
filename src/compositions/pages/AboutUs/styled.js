import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import Link from 'components/Link';
import remcalc from 'remcalc';
import { highlight } from 'styles/colours';

export const People = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: ${spacing(6)};
`;

export const WorkWithUs = styled.div`
  display: flex;
  font-size: ${remcalc(36)};
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Anchor = styled(Link)`
  font-size: ${remcalc(36)};
  color: ${highlight};
`;

export const LinkWrapper = styled.div`
  margin-bottom: ${spacing(7)};
  color: ${highlight};
`;
