import React from "react";
import Header from "../Core/Header";
import { Container } from "../Core/Container";
import TableProducts from "./TableProducts"

const Products = (props) => {
  return (
    <>
      <Header headerTitle="Category of Product" />
      <Container
        subTitle="Products"
        content={<TableProducts />}
      />
    </>
  );
};

export default Products;