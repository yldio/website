import React from 'react';

import Link from '../../../../../components/Link';

import {
  Container,
  Image,
  Product,
  ProductSublist,
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
      <ProductSublist>
        <Product>Digital Transformation</Product>
        <Product>Engineering Consultancy</Product>
        <Product>Product Consultancy</Product>
      </ProductSublist>
      <Footer>
        <Link href="/services#approach">More on Approach →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="design & product" />
      <Title>Design &amp; Product</Title>
      <ProductSublist>
        <Product>Design Systems &amp; Design Operations</Product>
        <Product>Design Sprints</Product>
        <Product>User Interface Design &amp; Branding</Product>
        <Product>Research, Usability and User Experience</Product>
      </ProductSublist>
      <Footer>
        <Link href="/services#design">More on Design →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="engineering" />
      <Title>Engineering</Title>
      <ProductSublist>
        <Product>Engineering Leadership</Product>
        <Product>Back End &amp; Node.js</Product>
        <Product>Front End &amp; React.js</Product>
        <Product>DevOps &amp; Kubernetes</Product>
        <Product>Mobile &amp; React Native</Product>
      </ProductSublist>
      <Footer>
        <Link href="/services#engineering">More on Engineering →</Link>
      </Footer>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="training" />
      <Title>Training</Title>
      <ProductSublist>
        <Product>Node Training</Product>
        <Product>React Training</Product>
        <Product>Design Systems Training</Product>
        <Product>UX Research Training</Product>
        <Product>UX Design Training</Product>
      </ProductSublist>
      <Footer>
        <Link href="/services#training">More on Training →</Link>
      </Footer>
    </ProductColumn>
  </Container>
);

export default ProductList;
