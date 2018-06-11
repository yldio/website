/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';

import { H2, Copy } from 'components/Typography';
import Container from 'components/Container';

const Wrapper = styled.section`
  background: #190533;
  padding: ${remcalc(110)} 0 ${remcalc(90)} 0;
`;

const List = styled.ul`
  margin-top: ${remcalc(40)};
  display: flex;
  flex-wrap: wrap;

  li {
    width: 33%;
    box-sizing: border-box;

    &:not(:last-child) {
      padding-right: 40px;
    }
  }
`;

const Bar = styled.div`
  background: #5e5cb2;
  width: ${remcalc(100)};
  height: ${remcalc(4)};
  margin-top: ${remcalc(-15)};
  margin-bottom: ${remcalc(40)};
`;

const Challenges = () => (
  <Wrapper data-selector="services:challenges">
    <Container>
      <H2 white>Common client challenges</H2>
      <Bar />
      <Copy light>
        We help you future proof your business through a new style of
        consulting, ground up.
      </Copy>
      <List>
        <li>
          <img
            src={require('../../../../assets/pair.svg')}
            alt="Customer experience"
            width="49px"
            height="41px"
          />
          <Copy white uppercase>
            Customer experience
          </Copy>
          <Copy light>
            Optimise people, processes, user experience, design and technology
            <br />
            <br />
            Provide a seamless customer experience across different channels
          </Copy>
        </li>
        <li>
          <img
            src={require('../../../../assets/teams.svg')}
            alt="Disruptive technology"
            width="55px"
            height="49px"
          />
          <Copy white uppercase>
            Disruptive technology
          </Copy>
          <Copy light>
            Align to your business goals but stay lean and innovate
            <br />
            <br />
            Stay ahead of the market
            <br />
            <br />
            Compete with start ups
          </Copy>
        </li>
        <li>
          <img
            src={require('../../../../assets/blog.svg')}
            alt="Skills Gap"
            width="49px"
            height="41px"
          />
          <Copy white uppercase>
            Skills Gap
          </Copy>
          <Copy light>
            Bridge the skills gap and attract the right technology professionals
            <br />
            <br />
            Achieve your business goals
            <br />
            <br />
            Make digital, technological or cultural change happen.
          </Copy>
        </li>
      </List>
    </Container>
  </Wrapper>
);

export default Challenges;
