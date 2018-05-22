import Container from 'components/Container';
import { spacing } from 'styles/spacing';

const PageSection = Container.withComponent('section').extend`
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
  position: relative;

  ${props =>
    props.gradient &&
    `
    padding-bottom: ${spacing(10)};
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -7.5%;
      height: 50%;
      width: 115%;
      background-image: linear-gradient(
        -180deg,
        rgba(255, 255, 255, 0.5) 0%,
        #f3f5fa 52%
      );
      z-index: -1;
    }
  `}
`;

export default PageSection;
