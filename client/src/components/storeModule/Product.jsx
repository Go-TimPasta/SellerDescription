/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  flex-grow: 4;
  max-width: 240px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
  }

  img {
    width: 100%;
    max-height: 188px;
  }

  h3 {
    margin: 12px 0 6px 0;
  }

  h3 > a {
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: 300;
  }

  .sd_price {
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 12px 0;
  }

  .sd_freeShipping {
    background-color: #D4E9D7;
    font-size: 12px;
    font-weight: bold;
    border-radius: 8px;
    padding: 3px 6px;
  }
`;

const Product = ({ product }) => (
  <Container>
    <img src={product.product_image} alt="seller product" />
    <h3>
      <a href="#">{product.product_name}</a>
    </h3>
    <p className="sd_price">
      ${product.product_price}
    </p>
    {
      product.is_free_shipping === 1
        ? <span className="sd_freeShipping">FREE shipping</span>
        : null
    }
  </Container>
);

export default Product;
