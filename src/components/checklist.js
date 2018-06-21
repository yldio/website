import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import remcalc from 'remcalc';

import { Copy } from 'components/typography';

const Icon = styled(FontAwesomeIcon)`
  color: #08d1bb;
  font-size: 2rem;
  margin-right: ${remcalc(30)};
`;

const Li = Copy.withComponent('li').extend`
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  margin: ${remcalc(28)} 0 0 0;
  width: 100%;
`;

export const Item = ({ children }) => (
  <Li>
    <Icon icon={faCheckCircle} /> {children}
  </Li>
);

export default styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
