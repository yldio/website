import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

import {
  highlight,
  highlightDark,
  highlightDarker,
  textOnDark,
} from 'styles/colours';

import { spacing } from 'styles/spacing';

const colours = {
  normal: highlight,
  dark: highlightDark,
  darker: highlightDarker,
};

const textColours = {
  normal: textOnDark,
  dark: textOnDark,
  darker: textOnDark,
};

export const Container = styled.li`
  background-color: ${props => colours[props.colour]};
  color: ${props => textColours[props.colour]};
  display: flex;
  position: relative;
  min-height: 400px;
  width: 100%;

  ${breakpoints.desktop`
    width: 50%;
  `};
`;

export const Content = styled.div`
  bottom: 0;
  left: 0;
  padding: ${spacing(4)}
  position: absolute;
  text-align: bottom;
`;

export const ContentTitle = styled.h5`
  font-weight: 500;
  font-size: 24px;
  margin: 0;
`;

export const ContentBody = styled.p`
  font-weight: 300;
  font-size: 24px;
  margin: 0;
`;
