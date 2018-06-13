import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import breakpoints from 'styles/breakpoints';
import Panel from 'components/Panel';
import remcalc from 'remcalc';

import { textLight, textLighter } from 'styles/colours';

export const Container = Panel.withComponent('ul').extend`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing(4)} ${spacing(2)};
  margin-left: ${spacing(-4)};
  margin-right: ${spacing(-4)};
  box-shadow: none;
`;

export const ProductColumn = styled.li`
  font-size: 1.125rem;
  padding: 0 ${spacing(2)} ${spacing(2)} ${spacing(2)};
  position: relative;
  width: 100%;

  ${breakpoints.phablet`
    width: 50%;
  `};

  ${breakpoints.desktop`
    width: 20%;
  `};
`;

export const Image = styled.img`
  height: auto;
`;

export const Product = styled.li`
  color: ${textLighter};
  margin-bottom: ${spacing(2)};
`;

export const Title = styled.header`
  color: ${textLight};
  font-weight: 500;
  margin-bottom: ${spacing(3)};
`;

export const ImageWrapper = styled.div`
  height: ${remcalc(60)};
`;
