import styled from 'styled-components';
import { highlight, textLight } from 'styles/colours';
import { gridWidth, spacing } from 'styles/spacing';

export const DefaultTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${textLight};
  line-height: 1.2em;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Before = styled.h1`
  color: ${highlight};
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: ${spacing()};
  margin-top: 0;
  text-transform: uppercase;
`;

export const Header = styled.header`
  margin-top: ${spacing(4)};
  margin-bottom: ${spacing(2)};
`;

export const Wrapper = styled.div`
  max-width: ${gridWidth * 2 / 3}px;
`;

export const Main = styled.main`
  color: ${textLight};
  font-size: 1.25rem;
  line-height: 1.8em;
`;
