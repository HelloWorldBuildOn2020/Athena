import React from "react";
import { Layout, Col, Row } from "antd";
import { Title } from "../Core/Text";
import User from "../Core/User";

const EmailSub = (props) => {
  const { Header } = Layout;

  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Row>
          <Col>
            <Title style={{ padding: 16, margin: "0 16px" }}>
              Email Subscription
            </Title>
          </Col>
          <User />
        </Row>
      </Header>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: "100vh", margin: "16px 16px" }}
      >
        Email Subscription Content :D
      </div>
    </div>
  );
};

export default EmailSub;
