import styled from 'styled-components';

import PageSection from 'components/PageSection';
import BG from '../../../../assets/page-hero.png';

export default styled(PageSection)`
  background: url('${BG}');
  background-position: left top;
  background-size: cover;
  height: 467px;
  max-width: 100%;
  z-index: 0;
`;
