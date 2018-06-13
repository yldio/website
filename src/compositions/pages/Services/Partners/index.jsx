/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

import Container from 'components/Container';
import { H2 } from 'components/Typography';
import breakpoints from 'styles/breakpoints';

import docker from '../../../../assets/docker.png';
import aws from '../../../../assets/aws.png';
import node from '../../../../assets/node.png';

const Bar = styled.div`
  background: #5e5cb2;
  width: ${remcalc(100)};
  height: ${remcalc(4)};
  margin-top: ${remcalc(15)};
  margin-bottom: ${remcalc(70)};
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;

  ${breakpoints.tablet`
   flex-directiom: row;
  `};
`;

const Partners = () => (
  <Container>
    <H2 slim>
      Our technology partners
      <Bar />
      <List>
        <li>
          <img src={docker} alt="docker" width="176" height="140" />
        </li>
        <li>
          <img src={aws} alt="aws" width="126" height="75" />
        </li>
        <li>
          <img src={node} alt="node" width="223" height="79" />
        </li>
      </List>
    </H2>
  </Container>
);

export default Partners;
