import styled from 'styled-components';
import {
  textLighter,
  textLight,
  textGreen,
  textRed,
  borderLight,
} from 'styles/colours';
import breakpoints from 'styles/breakpoints';

export const Item = styled.li`
  border-bottom: 1px solid ${borderLight};
  padding: 20px;

  &:hover {
    box-shadow: 0 7px 23px 5px rgba(161, 160, 197, 0.18);
    border: none;
  }

  &:last-child {
    border-bottom: none;
  }

  ${breakpoints.breakpoint('tablet', 'desktop')`
    &:nth-child(odd) {
      border-right: 1px solid ${borderLight};
    }
    &:nth-last-child(2) {
      border-bottom: none;
    }
  `};

  ${breakpoints.desktop`
    border-right: 1px solid ${borderLight};
    &:nth-child(3n) {
      border-right: none;
    }

    // This selects the last items in a 3 column grid even if there aren't enough items to fill the last row
    &:nth-child(3n+2):nth-last-child(-n+2),
    &:nth-child(3n+1):nth-last-child(-n+3) {
      border-bottom: none;
    }

  `};
`;
export const Parameter = styled.p`
  margin: 0;
  color: ${textLighter};
  font-size: 1.25rem;
  white-space: pre-line;
`;

export const Value = styled.h4`
  color: ${textLight};
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 0;
`;

export const Change = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.positive ? textGreen : textRed)};
  font-size: 1.2rem;
`;

export const Image = styled.img`
  margin-right: 15px;
  transform: ${props => (props.red ? 'rotate(180deg);' : 'rotate(0);')};
`;
