import React, { useState } from "react";
import { Table, Space, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import TransactionDetail from "./TransactionDetail";
import { dataTransactions } from "../../utils/mock";

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
            icon={<EyeOutlined />}
            onClick={() => handleDetail()}
          ></Button>
        </Space>
      ),
    },
  ];

  const [showTransactionDetail, setShowTransactionDetail] = useState(true);
  const handleDetail = () => {
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
        <TransactionDetail />
      )}
    </>
  );
};

export default Transaction;
