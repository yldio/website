import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import { textOnDark, highlight } from 'styles/colours';

export const OurValues = styled.div`
  background-color: ${highlight};
  color: ${textOnDark};
  padding: 69px 124px 69px 65px;
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

export const Tile = styled.div`
  display: inline-block;
  width: 100%;
`;
export const Header = styled.div`
  display: inline-block;
  width: 50%;
  font-weight: 300;
  font-size: 1.5rem;
`;
export const Description = styled.div`
  display: inline-block;
  width: 50%;
  font-weight: normal;
  font-size: 1.125rem;
`;

export const ValuesSection = styled.div`
  width: 100%;
  min-height: 10.63rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
