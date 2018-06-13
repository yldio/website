import styled from 'styled-components';
import { spacing } from 'styles/spacing';

export const TileContent = styled.div`
  bottom: 0;
  left: 0;
  padding: ${spacing(4)};
  position: absolute;
`;

export const TileContentTitle = styled.h5`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const TileContentBody = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
`;
