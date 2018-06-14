import Container from 'components/Container';
import { spacing } from 'styles/spacing';
import is from 'styled-is';

export const Section = Container.withComponent('section').extend`
  ${is('dark')`
    background-color: #190533;
  `};

  padding-top: ${spacing(10)};
  padding-bottom: ${spacing(7.4)};
  position: relative;

  ${is('paddingless')`
    padding-top: 0;
    padding-bottom: 0;
  `};
`;
