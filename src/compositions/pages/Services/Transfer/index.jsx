/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import is, { isNot } from 'styled-is';

import Container from 'components/Container';
import Card from 'components/Card';
import { H2, Copy } from 'components/Typography';
import { Row } from '../AddCode';

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
  background: #ffff;
  padding-top: ${remcalc(70)};
  padding-bottom: ${remcalc(70)};
  margin-top: ${remcalc(140)};
`;

const TransferSection = styled(Section)`
  padding: 0;
  padding-top: ${remcalc(140)};
  margin-top: 0px;
  background: #190533;
`;

const Transfer = () => (
  <TransferSection data-selector="services:tech">
    <Container>
      <H2 white slim>
        How we educate for knowledge transfer
        <Bar />
      </H2>
    </Container>
    <CardsWrapper>
      <Wrapper>
        <Card
          title="Private Training"
          points={[
            'Hands-on learning experience, in-person classes',
            'Tailoried training program delivered on-site to suit your needs',
            'Ensures your software engineers share a baseline',
          ]}
        />
        <Card
          title="Pairing"
          points={[
            '	Ongoing tutoring that covers all aspect of tech and product delivery ',
            'Seasoned YLD engineers and designers available to answer questions at all times',
            'Experienced supervisio for code review',
          ]}
        />
        <Card
          title="Certification"
          points={[
            '	Gain recognition for expertise and ability to employ best practices ',
            'Assess engineering candidates expertise and compare the results with your team’s performance',
          ]}
        />
      </Wrapper>
      <Container>
        <Row>
          <H2 slim>
            Our goal is never to just deliver but always to also upskill your
            whole team.
            <Bar />
          </H2>
          <Copy>
            We are an agile, flexible and passionate team consisting of
            strategy, design and engineering.
            <br />
            <br />
            We aspire to bring you the most up-to-date technology, with the
            minimal hassle possible.
            <br />
            <br />
            We take a hands on approach in our work, engaging directly with you
            in every stage of the development process.
            <br />
            <br />
            We take ownership of the delivery of the project or we can integrate
            at critical points with your team according to your needs.
            <br />
            <br />
            We enable your organisation to deliver world-class technology and
            user experiences, long after we leave.
          </Copy>
        </Row>
      </Container>
    </CardsWrapper>
  </TransferSection>
);

export default Transfer;
