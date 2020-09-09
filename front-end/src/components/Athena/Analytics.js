import React from "react";
import { Layout } from "antd";
import { Title } from "../Core/Text";

const Analytics = (props) => {
  const { Header } = Layout;

  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Title style={{ padding: 16, margin: "0 16px" }}>Analytics</Title>
      </Header>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh", margin: "16px 16px" }}
      >
        Analytics Content :D
      </div>
    </div>
  );
};

export default Analytics;
