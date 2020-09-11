import React from "react";
import { Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { SubTitle } from "./Text";

const User = (props) => {
  return (
    <Col className="col-10 d-flex justify-content-end" style={{ padding: 10 }}>
      <Avatar size="large" icon={<UserOutlined />} />
      <SubTitle style={{ margin: '-10px 16px' }}>Test</SubTitle>
    </Col>
  );
};

export default User;
