import styled from 'styled-components';
import { spacing } from 'styles/spacing';
import Container from 'components/Container';

export const Section = Container.withComponent('section').extend`
  margin-bottom: ${spacing(5)};
  margin-top: ${spacing(15)};
`;

export const TileContent = styled.div`
  padding: ${spacing(4)};
`;

export const TileContentTitle = styled.h5`
  letter-spacing: 1px;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

export const TileContentBody = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  margin: 0;
`;

export const Left = styled.div`
  float: left;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const Right = styled.div`
  background-color: red;
  float: right;
  width: 50%;
`;
