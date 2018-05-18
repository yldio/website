import React from 'react';
import {
  Container,
  Image,
  Product,
  ProductColumn,
  Title,
  Link,
} from './styled';

const ProductList = () => (
  <Container>
    <ProductColumn>
      <Image src="http://placekitten.com/195/156" alt="cat" />
      <Title>Our Approach</Title>
      <Product>Digital Transformation</Product>
      <Product>Engineering Consultancy</Product>
      <Product>Product Consultancy</Product>
      <Link to="/services">More on Approach →</Link>
    </ProductColumn>
    <ProductColumn>
      <Image src="http://placekitten.com/195/156" alt="cat" />
      <Title />
      <Product />
    </ProductColumn>
    <ProductColumn>
      <Image src="http://placekitten.com/195/156" alt="cat" />
      <Title />
      <Product />
    </ProductColumn>
    <ProductColumn>
      <Image src="http://placekitten.com/195/156" alt="cat" />
      <Title />
      <Product />
    </ProductColumn>
  </Container>
);

export default ProductList;
