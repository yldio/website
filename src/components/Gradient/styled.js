import styled from 'styled-components';

export const BaseGradient = styled.div`
    position: absolute;
    bottom: 0;
    left: -7.5%;
    right: -7.5%;
    height: ${props => props.height};
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.5) 0%,
      #f3f5fa 52%
    );
    z-index: -1;
  }
`;
