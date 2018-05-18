import styled from 'styled-components';

import Panel, { panelPadding } from '../Panel';
import Rule from '../Rule';
import { spacing } from '../../styles/spacing';
import { textLight, textLighter } from '../../styles/colours';

export const PostRule = styled(Rule)`
  margin: ${panelPadding} -${panelPadding};
`;

export const Thumbnail = styled.img`
  border-radius: 50%;
  margin-right: ${spacing()};
  height: 46px;
  width: 46px;
`;

export const Title = styled.h4`
  color: ${textLight};
  font-size: 1.375rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: ${spacing()};
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  font-size: 1.125rem;
`;

export const Time = styled.time`
  color: ${textLighter};
  display: block;
`;

export const Authored = styled.p`
  margin: 0;
`;

export const Body = styled.section`
  color: ${textLighter};
  font-size: 1.125rem;
`;

export const Article = Panel.withComponent('article');
