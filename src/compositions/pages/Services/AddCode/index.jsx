import React from 'react';
import { H2, Copy } from 'components/Typography';
import Container from 'components/Container';
import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import remcalc from 'remcalc';
import Card from 'components/Card';
import add from '../assets/remote-header.png';

export const EngHeader = styled.section`
    background: url('${add}');
    background-position: left top;
    background-size: cover;
    height: ${remcalc(460)};
    padding-top: ${remcalc(300)};
    margin-bottom: ${remcalc(80)};
`;

export const Row = styled.div`
  display: flex;
  margin: ${remcalc(80)} 0;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    flex-shrink: 0;

    ${breakpoints.tablet`
        width: 45%;
  `};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoints.tablet`
    justify-content: flex-end;
    margin-top: ${remcalc(-155)};
  `};
`;

const AddCode = () => (
  <section data-selector="services:add-code">
    <EngHeader>
      <Container>
        <H2 white slim>
          Remote Dedicated Services - Addcode
        </H2>
      </Container>
    </EngHeader>
    <Container>
      <Row>
        <Copy>
          If you are looking for iterative and Agile development strategies;
          cooperative development procedures; fast and easy communication; rapid
          prototyping; and user-centric design, remote teams nearshore are is
          the option for you.
          <br />
          <br />
          Utilizing our Addcode, our remote option brings benefits. Meaning this
          method provides advantages in both the initial cost standpoint, and in
          its risk-averseness.
        </Copy>
        <Wrapper>
          <Card
            title="ADDCODE BRINGS YOU"
            points={[
              'Scalability',
              'Language skills and proficiency',
              'Tech Skills',
              '	Types of services',
              'Complexity of work',
              'Geography - same time zone',
              'Talent offering',
              'Choice of location - Porto & Lisbon, Manchester ',
            ]}
          />
        </Wrapper>
      </Row>
    </Container>
  </section>
);

export default AddCode;
