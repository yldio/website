import React from 'react';

import {
  Container,
  Image,
  Product,
  ProductColumn,
  Title,
  Link,
} from './styled';

import placeholder from './placeholder.svg';

const ProductList = () => (
  <Container>
    <ProductColumn>
      <Image src={placeholder} alt="our approach" />
      <Title>Our Approach</Title>
      <Product>Digital Transformation</Product>
      <Product>Engineering Consultancy</Product>
      <Product>Product Consultancy</Product>
      <Link to="/services#approach">More on Approach →</Link>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="design & product" />
      <Title>Design &amp; Product</Title>
      <Product>Design Systems &amp; Design Operations</Product>
      <Product>Design Sprints</Product>
      <Product>User Interface Design &amp; Branding</Product>
      <Product>Research, Usability and User Experience</Product>
      <Link to="/services#design">More on Design →</Link>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="engineering" />
      <Title>Engineering</Title>
      <Product>Engineering Leadership</Product>
      <Product>Back End &amp; Node.js</Product>
      <Product>Front End &amp; React.js</Product>
      <Product>DevOps &amp; Kubernetes</Product>
      <Product>Mobile &amp; React Native</Product>
      <Link to="/services#engineering">More on Engineering →</Link>
    </ProductColumn>
    <ProductColumn>
      <Image src={placeholder} alt="training" />
      <Title>Training</Title>
      <Product>Node Training</Product>
      <Product>React Training</Product>
      <Product>Design Systems Training</Product>
      <Product>UX Research Training</Product>
      <Product>UX Design Training</Product>
      <Link to="/services#training">More on Training →</Link>
    </ProductColumn>
  </Container>
);

export default ProductList;
