import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import breakpoints from 'styles/breakpoints';
import { spacing } from 'styles/spacing';
import { textLighter } from 'styles/colours';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  color: ${textLighter};
  display: flex;
  flex-direction: row;
  font-size: 1.25rem;
  margin: ${spacing(2)} 0;
  width: 100%;

  ${breakpoints.tablet`
    padding-right: ${spacing(2)};
    width: 50%;

    &:nth-child(2n) {
      padding-left: ${spacing(2)};
      padding-right: 0;
    }
  `};
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #37beb0;
  font-size: 2rem;
  margin-right: ${spacing(3)};
`;
