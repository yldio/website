import styled from 'styled-components';
import { highlight, text } from 'styles/colours';
import { spacing } from 'styles/spacing';
import { DefaultTitle } from 'components/PageHero/styled';

export const Title = DefaultTitle.extend`
  color: ${text};
  font-weight: 500;
  font-size: 4.5rem;
  margin-bottom: ${spacing(4)};
  margin-top: ${spacing(4)};

  &:after {
    content: '.';
    color: ${highlight};
  }
`;

export const Paragraph = styled.p`
  margin: ${spacing(4)} 0;
`;
