import React from "react";
import { Layout, Col, Row } from "antd";
import { Title } from "./Text";
import User from "./User";

const Header = (props) => {
  const { Header } = Layout;
  
  return (
    <>
      <Header className='site-layout-background' style={{ padding: 0 }}>
        <Row>
          <Col>
            <Title style={{ padding: 16, margin: '0 16px' }}>{props.headerTitle}</Title>
          </Col>
          <User />
        </Row>
      </Header>
    </>
  );
};

export default Header;
