import styled from 'styled-components';

import Panel from 'components/Panel';
import Rule from 'components/Rule';
import { spacing } from 'styles/spacing';
import { textLight, textLighter } from 'styles/colours';

export const PostRule = styled(Rule)`
  margin: ${spacing(1.5)} ${spacing(-3)};
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
  margin-bottom: ${spacing()};
  margin-top: 0;
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

export const Body = styled.main`
  color: ${textLighter};
  flex-grow: 1;
  font-size: 1.125rem;
  padding-bottom: ${spacing(1.5)};
`;

export const Header = styled.header`
  padding-top: ${spacing(1.5)};
`;

export const Article = Panel.withComponent('article').extend`
  display: flex;
  flex-direction: column;
  padding: ${spacing(1.5)} ${spacing(3)};

  height: ${props => (props.stretch ? '100%' : 'auto')};
  width: ${props => (props.stretch ? '100%' : 'auto')};
`;
