import React from "react";
import { Row, Col, Descriptions, Breadcrumb } from "antd";
import Header from "../Core/Header";
import { Container } from "../Core/Container";

const Detail = ({ imageURL, detail }) => (
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
      <Row gutter={[16, 16]}>
        <Col span={12} className="d-flex justify-content-center pr-0 pl-5">
          <img src={imageURL} width="60%" />
        </Col>
        <Col span={12}>
          <Descriptions bordered>
            <Descriptions.Item label="Verification Code" span={3}>
              {detail.transfer_ref}
            </Descriptions.Item>
            <Descriptions.Item label="Verify Status" span={3}>
              {detail.status}
            </Descriptions.Item>
            <Descriptions.Item label="Charges" span={3}>
              ${detail.amount}
            </Descriptions.Item>
            <Descriptions.Item label="Date" span={3}>
              {detail.date}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  </>
);

const TransactionDetail = (props) => {
  const { location } = props;
  const imageURL =
    process.env.REACT_APP_S3_URL + location.state.detail.image_name;
  return (
    <>
      <Header headerTitle="Overview" />
      <Container
        subTitle="Transaction"
        content={<Detail imageURL={imageURL} detail={location.state.detail} />}
      />
    </>
  );
};

export default TransactionDetail;
