import Container from 'components/Container';
import { spacing } from 'styles/spacing';

export const Section = Container.withComponent('section').extend`
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
  position: relative;

  padding-bottom: ${props => (props.gradient ? spacing(10) : 0)};
`;
