import styled from 'styled-components';
import { highlight, text, textLight } from 'styles/colours';
import { gridWidth } from 'styles/spacing';

export const Title = styled.h2`
  color: ${text};
  font-weight: 500;
  font-size: 4.5rem;

  &:after {
    content: '.';
    color: ${highlight};
  }
`;

export const Body = styled.p`
  color: ${textLight};
  font-size: 1.25rem;
  line-height: 2em;
  max-width: ${gridWidth * 2 / 3}px;
  margin: 40px 0;
`;

export const Illustration1 = styled.div`
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 21%, #fafcff 79%);
  border-radius: 50%;
  height: 1200px;
  position: absolute;
  right: -700px;
  top: -720px;
  z-index: -1;
  width: 1080px;
`;

export const Illustration2 = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 21%,
    #fafcff 79%
  );
  border-radius: 50%;
  height: 600px;
  position: absolute;
  left: -280px;
  bottom: -380px;
  z-index: -1;
  width: 300px;
`;
