import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { textLight, textLighter } from 'styles/colours';

export const Illustration = styled.img`
  display: block;
  margin: ${spacing(5)} auto;
  max-width: 900px;
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

export const Service = styled.li`
  margin-bottom: ${spacing(10)};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
