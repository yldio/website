import styled from 'styled-components';
import { highlight, textLighter, textOnDark } from 'styles/colours';

export const QuoteWrapper = styled.div`
  color: ${textOnDark};
  margin: -13% 7% 2% 7%;
  background-color: ${highlight};
  position: relative;
  font-weight: 300;
  line-height: 1.24;
`;

export const Quote = styled.p`
  font-size: 2.1rem;
  padding: 77px 111px 20px 107px;
`;

export const Author = styled.p`
  font-size: 1.1875rem;
  padding-left: 107px;
  margin-bottom: 0px;
  font-weight: 500;
`;

export const Position = styled.p`
  margin-top: 0px;
  font-size: 1.1875rem;
  padding-left: 107px;
  padding-bottom: 88px;
`;

export const SubDescription = styled.p`
  color: ${textLighter};
  font-size: 1.25rem;
  white-space: pre-line;
  margin-top: 109px;
  margin-bottom: 75px;
  font-weight: 300;
`;
