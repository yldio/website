import styled from 'styled-components';
import { spacing } from 'styles/spacing';

export const CallToAction = styled.p`
  margin-top: ${spacing(8)};
  text-align: center;
`;

export const TileContent = styled.div`
  bottom: 0;
  left: 0;
  padding: ${spacing(4)};
  position: absolute;
`;

export const TileContentTitle = styled.h5`
  font-weight: 500;
  font-size: 24px;
`;

export const TileContentBody = styled.p`
  font-weight: 300;
  font-size: 24px;
`;
