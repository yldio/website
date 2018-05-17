import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  highlight,
  text,
  textLighter,
  textOnDark,
} from '../../../../../styles/colours';
import { spacing } from '../../../../../styles/spacing';
import breakpoints from '../../../../../styles/breakpoints';

export const Item = styled.li`
  padding: ${spacing(1.5)};
  width: 100%;

  ${breakpoints.tablet`
    width: 50%;
  `};

  ${breakpoints.desktop`
    width: ${100 / 3}%;
  `};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: ${spacing(0.5)};
`;

export const Body = styled.div`
  background: white;
  border: 1px solid #e4e8ef;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(161, 160, 197, 0.1);
  color: ${text};
  height: 100%;
  padding: ${spacing(3)};
`;

export const CTABody = Body.extend`
  background-color: ${highlight};
  border: none;
  box-shadow: none;
  color: ${textOnDark};
`;

export const Title = styled.h6`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 0 ${spacing()} 0;
`;

export const Content = styled.p`
  color: ${textLighter};
  font-size: 1.125rem;
  margin: 0;
`;

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: ${spacing(8)} ${spacing(-1.5)};
  padding: 0;
`;
