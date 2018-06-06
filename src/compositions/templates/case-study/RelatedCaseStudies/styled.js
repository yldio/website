import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import Container from 'components/Container';

export const Section = Container.withComponent('section').extend`
  margin-bottom: ${spacing(5)};
  margin-top: ${spacing(15)};
`;

export const TileContent = styled.div`
  display: flex;
`;

export const TileContentTitle = styled.h5`
  letter-spacing: 0.4px;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const TileContentBody = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: ${spacing(4)};
`;

export const Right = styled.div`
  position: relative;
  width: 50%;
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  width: auto;
  height: 100%;
`;
