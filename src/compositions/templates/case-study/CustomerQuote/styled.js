import styled from 'styled-components';
import { highlight, textOnDark } from 'styles/colours';
import DefaultContainer from 'components/Container';

export const QuoteWrapper = styled.div`
  color: ${textOnDark};
  background-color: ${highlight};
  position: relative;
  font-weight: 300;
  line-height: 1.24em;
  padding: 80px 110px;
`;

export const Container = DefaultContainer.extend`
  margin-top: -80px;
`;

export const Quote = styled.p`
  font-size: 2.375rem;
  line-height: 1.24em;
  margin-bottom: 40px;
`;

export const Author = styled.p`
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Position = styled.p`
  font-size: 1.25rem;
`;
