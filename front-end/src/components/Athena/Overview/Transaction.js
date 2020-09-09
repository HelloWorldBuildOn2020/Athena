import React from "react";
import { Table, Space, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { SubTitle } from "../../Core/Text";

const Transaction = (props) => {
  const dataSource = [
    {
      key: "1",
      charges: "$4500",
      verification_code: "tran_id0001",
      verify_status: "Successful",
      date: "July 22, 2020 22:22",
    },
    {
      key: "1",
      charges: "$2350",
      verification_code: "tran_id0002",
      verify_status: "Failure",
      date: "July 22, 2020 22:00",
    },
    {
      key: "1",
      charges: "$1500",
      verification_code: "tran_id0003",
      verify_status: "Successful",
      date: "July 22, 2020 21:22",
    },
    {
      key: "1",
      charges: "$6700",
      verification_code: "tran_id0004",
      verify_status: "Failure",
      date: "July 22, 2020 12:00",
    },
  ];

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
          <Button icon={<EllipsisOutlined />} onClick={handleDetail()}></Button>
        </Space>
      ),
    },
  ];

  const handleDetail = () => {
    
  }

  return (
    <div>
      <SubTitle>Transactions</SubTitle>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Transaction;
