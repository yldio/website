import React from 'react';
import { H2, H5, Copy } from 'components/Typography';
import Container from 'components/Container';
import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import remcalc from 'remcalc';
import design from '../assets/design-header.png';

export const DesignHeader = styled.section`
    background: url('${design}');
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

const Design = () => (
  <section data-selector="services:design">
    <DesignHeader>
      <Container>
        <H2 white slim>
          Design & Product
        </H2>
      </Container>
    </DesignHeader>
    <Container>
      <H5 noBorder>
        A great company continuously finds better solutions to its customers
        biggest problems. Design is the bridge between the two. Great design
        goes deeper than just how something looks, it’s why and how it works,
        for your customers and for your business.
      </H5>
      <Row>
        <article>
          <Copy blue uppercase>
            Design Leadership
          </Copy>
          <Copy>
            Design Leadership helps build this voice at the centre of your
            companies process, enabling Design Thinking to drive innovation and
            quality across your organisation.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            Design Systems & DesignOps
          </Copy>
          <Copy>
            For teams to deliver a great experience continuously, it’s necessary
            to have a toolset that enables an organisation to answer customer
            problems quickly, at high-quality and iterate rapidly. Design
            Systems put a powerful product design toolset at the centre of every
            team.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            Design Sprints
          </Copy>
          <Copy>
            Design Sprints enable us to build a deep understanding of the
            customer problems teams are facing, and to move quickly into
            prototyping and testing assumptions and original ideas quickly.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            User Interface Design & Branding
          </Copy>
          <Copy>
            Great UI design connects your users with your product. It’s the most
            tactile, direct interaction people will have with your brand, your
            services, and your customer experience.
          </Copy>
        </article>
        <article>
          <Copy blue uppercase>
            Research, Usability and User Experience
          </Copy>
          <Copy>
            Knowing that you’re solving the right customer problems, and with
            the right user experience is key to growing your product. Great
            products dont just look good, they enable their users to achieve
            their goals effortlessly.
          </Copy>
        </article>
      </Row>
    </Container>
  </section>
);

export default Design;
