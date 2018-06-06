import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

import {
  highlight,
  highlightDark,
  highlightDarker,
  textOnDark,
} from 'styles/colours';

const colours = {
  normal: highlight,
  dark: highlightDark,
  darker: highlightDarker,
  lightGreen: '#67d5bf',
};

const textColours = {
  normal: textOnDark,
  dark: textOnDark,
  darker: textOnDark,
  lightGreen: textOnDark,
};

export const Tile = styled.li`
  background-color: ${props => colours[props.colour || 'normal']};
  color: ${props => textColours[props.colour || 'normal']};
  display: flex;
  position: relative;
  min-height: 400px;
  width: 100%;

  ${breakpoints.desktop`
    width: 50%;
  `};
`;
