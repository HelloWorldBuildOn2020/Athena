import React from "react";
import { Layout } from "antd";
import { Title, P } from "../../Core/Text";
import Transaction from "../Overview/Transaction";

const Overview = (props) => {
  const { Header } = Layout;

  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
          <Title style={{ padding: 16, margin: "0 16px" }}>Overview</Title>
      </Header>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh", margin: "16px 16px" }}
      >
        <Transaction />
      </div>
    </div>
  );
};

export default Overview;
