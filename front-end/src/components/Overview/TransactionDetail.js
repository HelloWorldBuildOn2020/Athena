import React from "react";
import { Layout, Table, Row, Col, Descriptions, Breadcrumb } from "antd";
import { dataTransactionsDetail } from "../../utils/mock";
import { SubTitle } from "../Core/Text";
import Slip from "../../slip.jpg";

const Overview = (props) => {
  const { Header } = Layout;

  const columns = [
    {
      title: "Charges",
      dataIndex: "charges",
      key: "charges",
    },
    {
      title: "Verification Code",
      dataIndex: "verification_code",
      key: "verification_code",
    },
    {
      title: "Verify Status",
      dataIndex: "verify_status",
      key: "verify_status",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div>
      <div style={{ padding: 16 }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/Overview">Overview</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Transaction Detail</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div
        className="site-layout-background"
        style={{ padding: 24, margin: "16px 16px" }}
      >
        <SubTitle>Transaction Detail</SubTitle>{" "}
        <Table
          dataSource={dataTransactionsDetail}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        />
      </div>
      <div
        className="site-layout-background"
        style={{ padding: 24, margin: "16px 16px" }}
      >
        <Row>
          <SubTitle>Payment Information</SubTitle>
        </Row>
        <Row>
          <Col span={12}>
            <div style={{ margin: "16px 16px" }}>
              <Descriptions bordered>
                <Descriptions.Item label="Name" span={3}>
                  Jirattikarn Vilairat
                </Descriptions.Item>
                <Descriptions.Item label="Email" span={3}>
                  jirattikarn.vil@mail.kmutt.ac.th
                </Descriptions.Item>
                <Descriptions.Item label="Address" span={3}>
                  126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
                </Descriptions.Item>
                <Descriptions.Item label="Tel." span={3}>
                  0899798976
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Col>
          <Col span={12} className="d-flex justify-content-center">
            <img src={Slip} width="60%" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
