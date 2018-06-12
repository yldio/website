import React from 'react';
import { H2, H5, Copy } from 'components/Typography';
import Container from 'components/Container';
import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import remcalc from 'remcalc';
import eng from '../assets/leadership-header.png';

export const EngHeader = styled.section`
    background: url('${eng}');
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

const Engineering = () => (
  <section data-selector="services:engeeniring">
    <EngHeader>
      <Container>
        <H2 white slim>
          Engineering Leadership
        </H2>
      </Container>
    </EngHeader>
    <Container>
      <H5 noBorder>
        We want to empower organisations to become technology companies, that
        leverage engineering to accelerate their growth and to give them
        flexibility and speed to react to market changes.
        <br />
        <br />
        By putting engineering at the heart of the business, we enable
        organisations to be effective, impactful, flexible and to build lasting
        products with great teams.
      </H5>
      <Row>
        <article>
          <Copy blue uppercase>
            Back-End and Node.js
          </Copy>
          <Copy>
            We focus on incremental improvements that delivery business value.
            That’s why we work with Node.js in a microservices architecture. It
            allows us to both build new systems and migrate legacy systems into
            a collection of business-critical services that can be built,
            deployed and maintained separately, and at the same time composed to
            build complex products.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            Front-End and React.js
          </Copy>
          <Copy>
            Customers interact with our products through our front-end
            applications on multiple devices. We leverage that complexity with
            React and other front-end frameworks, where we create reusable and
            reliable components to solve business needs. This allows us to work
            incrementally, build well tested frontend components and at the same
            time implement Engineering systems in a much more consistent and
            repeatable way.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            Mobile and React Native
          </Copy>
          <Copy>
            By using React Native, we build cross-platform mobile applications
            once and deploy them to both the App Store and the Play Store. This
            means we don’t need dedicated teams writing the same application in
            different languages, we are able to dramatically increase the speed
            at which we release features, and we improve maintainability and
            reusability by taking advantage of componentisation.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            DevOps and Kubernetes
          </Copy>
          <Copy>
            In a demanding world where quality, speed and reliability matters,
            we need to be able to react quickly and effectively to change.
            That’s why we focus on having a DevOps mentality, which gives the
            business the flexibility of deploying, scaling and delivering secure
            software to live environments at high velocity and continuously.
            This enables organisations to improve their products at a faster
            pace, which in turn allows them to satisfy their customers quickly
            and effectively.
          </Copy>
        </article>
      </Row>
    </Container>
  </section>
);

export default Engineering;
