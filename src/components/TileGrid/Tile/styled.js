import styled from 'styled-components';

import {
  highlight,
  highlightDark,
  highlightDarker,
} from '../../../styles/colours';

const colours = {
  normal: highlight,
  dark: highlightDark,
  darker: highlightDarker,
};

export const Container = styled.li`
  background-color: ${props => colours[props.colour]};
  display: flex;
  min-height: 400px;
  width: 50%;
`;

export const Content = styled.div`
  text-align: bottom;
`;

export const ContentTitle = styled.h5``;

export const ContentBody = styled.p``;
