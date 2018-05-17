import styled from 'styled-components';
import Container from '../../../../components/Container';
import { highlight, text } from '../../../../styles/colours';
import { spacing, gridWidth } from '../../../../styles/spacing';

export const Title = styled.h2`
  color: ${text};
  font-weight: 500;
  font-size: 4.5rem;

  &:after {
    content: '.';
    color: ${highlight};
  }
`;

export const Section = Container.extend`
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
`;

export const Body = styled.p`
  color: ${text};
  font-size: 1.25rem;
  line-height: 2em;
  max-width: ${gridWidth * 2 / 3}px;
  margin: 40px 0;
`;
