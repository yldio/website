import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';
import Panel from 'components/Panel';

import { textLight, textLighter } from 'styles/colours';

export const Container = Panel.withComponent('ul').extend`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing(4)} ${spacing(2)};
  margin-left: ${spacing(-4)};
  margin-right: ${spacing(-4)};
`;

export const ProductColumn = styled.li`
  font-size: 1.125rem;
  padding: 0 ${spacing(2)} ${spacing(5)} ${spacing(2)};
  margin: ${spacing(2)} 0;
  position: relative;
  width: 100%;

  ${breakpoints.phablet`
    width: 50%;
  `};

  ${breakpoints.desktop`
    width: 25%;
  `};
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: ${spacing(3)};
  width: 100%;
`;

export const Product = styled.li`
  color: ${textLighter};
  margin-bottom: ${spacing(2)};
`;

export const Title = styled.header`
  color: ${textLight};
  font-weight: 500;
  margin-bottom: ${spacing(2)};
`;

export const Footer = styled.footer`
  bottom: 0;
  font-weight: 500;
  left: ${spacing(2)};
  position: absolute;
`;
