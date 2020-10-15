import React, { useState } from "react";
import { Row, Col, Descriptions, Breadcrumb, Button, Input as InputAntd } from "antd";
import Header from "../Core/Header"
import styled from "styled-components"
import { Container } from "../Core/Container"

const Input = styled(InputAntd)`
  &:disabled {
    cursor: pointer;
    background-color: transparent;
    color: black;
    border: 0px;
  }
`
const Detail = ({ imageURL, detail }) => {
  const [disabledInput, setDisabledInput] = useState(true)
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [showSaveButton, setShowSaveButton] = useState(false)
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
      <Row gutter={[16, 16]}>
        <Col span={12} className="d-flex justify-content-center pr-0 pl-5">
          <img src={imageURL} width="80%" />
        </Col>
        <Col span={12}>
          <Descriptions
            bordered
            extra={
              showSaveButton ?
              <Button
                type="primary"
                onClick={() => {
                  setDisabledInput(true)
                  setShowSaveButton(false)
                }}
              >
                Save
              </Button>:
              <Button
                type="primary"
                onClick={() => {
                  setDisabledInput(false)
                  setShowSaveButton(true)
                }}
              >
                Edit
              </Button>
            }
          >
            <Descriptions.Item label="Verification Code" span={3}>
              {detail.transfer_ref}
            </Descriptions.Item>
            <Descriptions.Item label="Verify Status" span={3}>
              <Input
                defaultValue={detail.status}
                disabled={disabledInput}
                onChange={(e) => setStatus(e.target.value)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Charges" span={3}>
              <Input
                defaultValue={detail.amount}
                disabled={disabledInput}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Date" span={3}>
              <Input
                type="date"
                defaultValue={detail.date}
                disabled={disabledInput}
                onChange={(e) => setDate(e.target.value)}
              />
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
     </div>
    </>
  )
};

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
