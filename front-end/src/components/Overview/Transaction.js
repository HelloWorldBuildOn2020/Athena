import React, { useState } from "react";
import { Table, Space, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import TransactionDetail from "./TransactionDetail";
import { dataTransactions } from "../../utils/mock";
import styled from 'styled-components'
import apiService from '../../services/apiVerifySlip'

const EyeStyle = styled(EyeOutlined)`
  svg {
    margin-bottom: 5px;
  }
`

const Transaction = (props) => {
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
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            icon={<EyeStyle />}
            onClick={() => handleDetail()}
          ></Button>
        </Space>
      ),
    },
  ];

  const [objectURL, setObjectURL] = useState('');
  const [showTransactionDetail, setShowTransactionDetail] = useState(true);
  const handleDetail = async () => {
    const responseGetImage = await apiService.getImageFromS3()
    const url = JSON.parse(responseGetImage.data.body).obj_url
    setObjectURL(url)
    setShowTransactionDetail(false);
  };

  return (
    <>
      {showTransactionDetail ? (
        <div>
          <Table
            dataSource={dataTransactions}
            columns={columns}
            pagination={{ defaultPageSize: 10 }}
          />
        </div>
      ) : (
        <TransactionDetail imageURL={objectURL}/>
      )}
    </>
  );
};

export default Transaction;
