import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import { spacing } from '../../../../../styles/spacing';

import {
  highlight,
  textLight,
  textLighter,
} from '../../../../../styles/colours';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(161, 160, 197, 0.2);
  display: flex;
  list-style-type: none;
  padding: ${spacing(4)} ${spacing(2)};
`;

export const ProductColumn = styled.div`
  font-size: 1.125rem;
  padding: 0 ${spacing(2)} ${spacing(5)} ${spacing(2)};
  margin: ${spacing(2)} 0;
  position: relative;
  width: 25%;
`;

export const Image = styled.img`
  height: auto;
  margin-bottom: ${spacing(3)};
  width: 100%;
`;

export const Product = styled.span`
  color: ${textLighter};
  display: block;
  margin-bottom: ${spacing(2)};
`;

export const Title = Product.extend`
  color: ${textLight};
  font-weight: 500;
  font-size: inherit;
`;

export const Link = styled(GatsbyLink)`
  bottom: 0;
  color: ${highlight};
  font-weight: 500;
  left: ${spacing(2)};
  position: absolute;
  text-decoration: none;
`;
