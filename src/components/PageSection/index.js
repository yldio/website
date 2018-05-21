import Container from '../Container';
import { spacing } from 'styles/spacing';

const PageSection = Container.withComponent('section').extend`
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
`;

export default PageSection;
