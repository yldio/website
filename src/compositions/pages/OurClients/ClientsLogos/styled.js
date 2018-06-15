import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import { textBlue } from 'styles/colours';

export const Grid = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 25% 25% 25% 25%;

  &last-child {
    width: 500px;
    background-color: #5e5cb2;
  }
  ${breakpoints.mobile`
  grid-template-columns: 33% 33% 33%;
  `};
  ${breakpoints.desktop`
  grid-template-columns: 25% 25% 25% 25%;
  `};
`;

export const Header = styled.div`
  color: ${textBlue};
  font-size: 2.25rem;
  text-align: center;
  margin-top: 85px;
  line-height: 1.44;
`;

export const Line = styled.p`
  width: 100px;
  height: 4px;
  background-color: #5e5cb2;
  text-align: center;
  margin: 11px auto 70px auto;
`;

export const LogoWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${breakpoints.mobile`
    margin-bottom: 32px;
  `};
`;

export const Image = styled.img`
  max-width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 90%;
`;
