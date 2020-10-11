import React from "react";
import Header from "../Core/Header";
import { Container } from "../Core/Container";
import TableEmail from "./TableEmail"

const EmailSub = (props) => {
  return (
    <>
      <Header headerTitle="Email Subscription" />
      <Container
        subTitle="Email Subscription"
        content={<TableEmail />}
      />
    </>
  );
};

export default EmailSub;
