import React from 'react';
import { H2, H5, Copy } from 'components/Typography';
import Container from 'components/Container';
import styled from 'styled-components';
import remcalc from 'remcalc';
import breakpoints from 'styles/breakpoints';
import approach from '../assets/approach.png';

export const ApproachHeader = styled.section`
    background: url('${approach}');
    background-position: left top;
    background-size: cover;
    height: ${remcalc(460)};
    padding-top: ${remcalc(300)}
`;

export const Row = styled.div`
  display: flex;
  margin: ${remcalc(80)} 0;
  flex-direction: column;

  ${breakpoints.tablet`
      flex-direction: row;
  `};

  & > * {
    width: 100%;

    ${breakpoints.tablet`
        width: 50%;
  `};
  }
`;

const Approach = () => (
  <section data-selector="services:approach">
    <ApproachHeader>
      <Container>
        <H2 white slim>
          Our Approach
        </H2>
      </Container>
    </ApproachHeader>
    <Container>
      <Row>
        <H5>Consultancy</H5>
        <Copy>
          We help you realise the full potential of your engineering and
          delivery capability.
          <br />
          <br />
          We use our capability model to help you gauge your organisation’s
          current maturity and help you identify any gaps and opportunities for
          improvement in line with your vision.
          <br />
          <br />
          We use our best practice models of discovery and delivery to drive
          success and ensure you have the right skills, processes and tools.
          What’s more we help you build the right framework to develop a long
          lasting engineering culture. We bring excellence, fast, and we
          ultimately save our clients millions of pounds in licensing fees.
        </Copy>
      </Row>
    </Container>
  </section>
);

export default Approach;
