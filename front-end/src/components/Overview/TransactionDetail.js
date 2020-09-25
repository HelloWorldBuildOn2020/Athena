import React from "react";
import { Layout, Row, Col, Descriptions, Breadcrumb } from "antd";
import Slip from "../../slip.jpg";

const TransactionDetail = (props) => {
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
    <>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Overview</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Transaction Detail</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <br />
      <div>
        <Row>
          <Col span={12}>
            <div>
              <Descriptions bordered>
                <Descriptions.Item label="Verification Code" span={3}>
                  tran_id0001
                </Descriptions.Item>
                <Descriptions.Item label="Verify Status" span={3}>
                  Successful
                </Descriptions.Item>
                <Descriptions.Item label="Charges" span={3}>
                  $4500
                </Descriptions.Item>
                <Descriptions.Item label="Date" span={3}>
                  July 22, 2020 22:22
                </Descriptions.Item>
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
    </>
  );
};

export default TransactionDetail;
