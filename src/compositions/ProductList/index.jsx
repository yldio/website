/* eslint-disable global-require */

import React from 'react';

import { Container, Image, Product, ProductColumn, Title } from './styled';

const ProductList = () => (
  <Container>
    <ProductColumn>
      <Image
        src={require('../../assets/resource.svg')}
        alt="Strategy"
        width="34px"
        height="40px"
      />
      <Title>Strategy</Title>
      <ul>
        <Product>Digital Transformation</Product>
        <Product>Engineering Consultancy</Product>
        <Product>Product Consultancy</Product>
      </ul>
    </ProductColumn>
    <ProductColumn>
      <Image
        src={require('../../assets/design.svg')}
        alt="Design and Product"
        width="50px"
        height="31px"
      />
      <Title>Design &amp; Product</Title>
      <ul>
        <Product>Design Systems &amp; Design Operations</Product>
        <Product>Design Sprints</Product>
        <Product>User Interface Design &amp; Branding</Product>
        <Product>Research, Usability and User Experience</Product>
      </ul>
    </ProductColumn>
    <ProductColumn>
      <Image
        src={require('../../assets/eng.svg')}
        alt="Engineering"
        width="39px"
        height="32px"
      />
      <Title>Engineering</Title>
      <ul>
        <Product>Engineering Leadership</Product>
        <Product>Back End &amp; Node.js</Product>
        <Product>Front End &amp; React.js</Product>
        <Product>DevOps &amp; Kubernetes</Product>
        <Product>Mobile &amp; React Native</Product>
        <Product>Microservices &amp; evolutionary architecture</Product>
        <Product>Cloud infrastructure</Product>
        <Product>Cloud &amp; Containers</Product>
        <Product>Emerging technologies </Product>
        <Product>Machine Learning</Product>
        <Product>.Net Core</Product>
        <Product>Vue</Product>
      </ul>
    </ProductColumn>
    <ProductColumn>
      <Image
        src={require('../../assets/training.svg')}
        alt="Engineering"
        width="37px"
        height="32px"
      />
      <Title>Training</Title>
      <ul>
        <Product>Node Training</Product>
        <Product>React Training</Product>
        <Product>Design Systems Training</Product>
        <Product>UX Research Training</Product>
        <Product>UX Design Training</Product>
      </ul>
    </ProductColumn>
    <ProductColumn>
      <Image
        src={require('../../assets/rocket.svg')}
        alt="Addcode"
        width="39px"
        height="39px"
      />
      <Title>Addcode</Title>
      <ul>
        <Product>Remote Teams</Product>
        <Product>Geography - same time zone</Product>
        <Product>Scalability</Product>
        <Product>Talent</Product>
        <Product>Choice of location</Product>
        <Product>Lisbon, Porto, Manchester</Product>
      </ul>
    </ProductColumn>
  </Container>
);

export default ProductList;
