import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import { textBlue } from 'styles/colours';

export const Grid = styled.ul`
  display: grid;
  position: relative;
  grid-template-columns: 25% 25% 25% 25%;
  ${breakpoints.mobile`
  grid-template-columns: 33% 33% 33%;
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
  margin-bottom: 158px;
  margin-left: auto;
  margin-right: auto;
  ${breakpoints.mobile`
    margin-right: 24px;
    margin-bottom: 42px;
  `};
`;

export const Image = styled.img`
  max-width: 100%;
`;
