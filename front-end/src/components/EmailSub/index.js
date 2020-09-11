import React from "react";
import Header from "../Core/Header";
import { Container } from "../Core/Container";

const EmailSub = (props) => {
  return (
    <>
      <Header headerTitle="Email Subscription" />
      <Container
        subTitle="Email Subscription"
        content="Email Subscription Content"
      />
    </>
  );
};

export default EmailSub;
