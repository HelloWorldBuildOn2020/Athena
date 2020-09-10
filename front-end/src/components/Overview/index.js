import React from "react";
import { Layout, Col, Row } from "antd";
import { Title } from "../Core/Text";
import Transaction from "./Transaction";
import User from "../Core/User";

const Overview = (props) => {
  const { Header } = Layout;

  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row>
          <Col>
            <Title style={{ padding: 16, margin: "0 16px" }}>Overview</Title>
          </Col>
          <User />
        </Row>
      </Header>
      <Transaction />
    </div>
  );
};

export default Overview;
