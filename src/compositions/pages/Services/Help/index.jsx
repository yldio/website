/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import is, { isNot } from 'styled-is';

import Container from 'components/Container';
import { pink } from 'styles/colours';
import Card from 'components/Card';
import { H2 } from 'components/Typography';

import { Section } from '../styled';

const Bar = styled.div`
  background: #5e5cb2;
  width: ${remcalc(100)};
  height: ${remcalc(4)};
  margin-top: ${remcalc(15)};
  margin-bottom: ${remcalc(70)};
`;

const Wrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${isNot('noMargin')`
    margin-top: ${remcalc(-140)};
  `}
  margin-bottom: ${remcalc(70)};

  ${is('noMargin')`
    padding: 0;
  `}
`;

const CardsWrapper = styled.div`
  background: #190533;
  padding-top: ${remcalc(70)};
  padding-bottom: ${remcalc(70)};
  margin-top: ${remcalc(140)};
`;

const HelpSection = styled(Section)`
  padding: 0;
  padding-top: ${remcalc(140)};
  margin-top: 0px;
`;

const Item = styled.li`
  &::before {
    content: '•';
    margin-right: ${remcalc(20)};
    color: ${pink};
  }
  &:not(:last-child) {
    margin-bottom: ${remcalc(20)};
  }

  color: white;
`;

const Help = () => (
  <HelpSection data-selector="services:tech">
    <Container>
      <H2 white slim>
        We bring you the latest techniques<br /> to help you meet your
        challenges
        <Bar />
      </H2>
    </Container>
    <CardsWrapper>
      <Wrapper>
        <Card
          title="YLD DELIVERS"
          points={['Lean Culture', 'Micro-services']}
        />
        <Card
          title="Leveraging"
          points={['Vertical teams', 'Open source software']}
        />
        <Card
          title="Enabling"
          points={['Experimentation', '	Continuous delivery with zero downtime']}
        />
      </Wrapper>
      <Container>
        <H2 white slim>
          To bring you business value
          <Bar />
        </H2>
        <Wrapper noMargin>
          <ul>
            <Item>Utilise disruptive technology</Item>
            <Item>Stay lean and compete</Item>
          </ul>
          <ul>
            <Item>Transform</Item>
            <Item>Innovate</Item>
          </ul>
          <ul>
            <Item>Speed of delivery and efficiency</Item>
            <Item>Bridge the skills gap</Item>
          </ul>
          <ul>
            <Item>Mitigate risk</Item>
            <Item>Lower cost</Item>
          </ul>
        </Wrapper>
      </Container>
    </CardsWrapper>
  </HelpSection>
);

export default Help;
