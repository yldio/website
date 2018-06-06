import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import Container from 'components/Container';

export const Section = Container.withComponent('section').extend`
  margin-bottom: ${spacing(5)};
  margin-top: ${spacing(-6)};
`;

export const TileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing(4)};
`;

export const TileContentTitle = styled.h5`
  letter-spacing: 1px;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TileContentBody = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
`;
