import React from "react";
import { Card, Col, Row } from "antd";
import { Title, CardContent } from "../Core/Text";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

const DataSection = (props) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">
              Total Balance
            </Title>
            <CardContent className="d-flex justify-content-center">
              100,000
            </CardContent>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">On Hold</Title>
            <CardContent className="d-flex justify-content-center">
              0
            </CardContent>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">
              Products Sold
            </Title>
            <CardContent className="d-flex justify-content-center">
              20
            </CardContent>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">
              Total Transaction
            </Title>
            <CardContent className="d-flex justify-content-center">
              3,000
            </CardContent>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "16px" }}>
        <Col span={12}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">
              Product Sold
            </Title>
            <CardContent className="d-flex justify-content-center">
              <DoughnutChart />
            </CardContent>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Title className="d-flex justify-content-center">
              Total Transactions
            </Title>
            <CardContent className="d-flex justify-content-center">
              <LineChart />
            </CardContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DataSection;
