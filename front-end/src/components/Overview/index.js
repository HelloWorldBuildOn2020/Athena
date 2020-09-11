import React from "react";
import Transaction from "./Transaction";
import Header from "../Core/Header";
import { Container } from "../Core/Container";

const Overview = (props) => {
  return (
    <>
      <Header headerTitle="Overview" />
      <Container subTitle="Transaction" content={<Transaction />} />
    </>
  );
};

export default Overview;
