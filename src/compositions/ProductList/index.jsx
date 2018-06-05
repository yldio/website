import React from 'react';

import Link from 'components/Link';

import {
  Container,
  Image,
  Product,
  ProductColumn,
  Title,
  Footer,
} from './styled';

import placeholder from './placeholder.svg';

const ProductList = () => (
  <Container>
    <ProductColumn>
      <Image src={placeholder} alt="our approach" />
      <Title>Our Approach</Title>
      <ul>
        <Product>Digital Transformation</Product>
        <Product>Engineering Consultancy</Product>
        <Product>Product Consultancy</Product>
      </ul>
      <Footer>
        <Link href="/services#approach">More on Approach →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="design & product" />
      <Title>Design &amp; Product</Title>
      <ul>
        <Product>Design Systems &amp; Design Operations</Product>
        <Product>Design Sprints</Product>
        <Product>User Interface Design &amp; Branding</Product>
        <Product>Research, Usability and User Experience</Product>
      </ul>
      <Footer>
        <Link href="/services#design">More on Design →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="engineering" />
      <Title>Engineering</Title>
      <ul>
        <Product>Engineering Leadership</Product>
        <Product>Back End &amp; Node.js</Product>
        <Product>Front End &amp; React.js</Product>
        <Product>DevOps &amp; Kubernetes</Product>
        <Product>Mobile &amp; React Native</Product>
      </ul>
      <Footer>
        <Link href="/services#engineering">More on Engineering →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="training" />
      <Title>Training</Title>
      <ul>
        <Product>Node Training</Product>
        <Product>React Training</Product>
        <Product>Design Systems Training</Product>
        <Product>UX Research Training</Product>
        <Product>UX Design Training</Product>
      </ul>
      <Footer>
        <Link href="/services#training">More on Training →</Link>
      </Footer>
    </ProductColumn>
  </Container>
);

export default ProductList;
