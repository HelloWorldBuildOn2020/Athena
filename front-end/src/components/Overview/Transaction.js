import React, { useState, useEffect } from "react";
import { Table, Space, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import styled from 'styled-components'
import apiOverview from '../../services/apiOverviewService'
import {useHistory} from 'react-router-dom'

const EyeStyle = styled(EyeOutlined)`
  svg {
    margin-bottom: 5px;
  }
`

const Transaction = (props) => {
  const columns = [
    {
      title: "Charges",
      dataIndex: "amount",
      key: "charges",
    },
    {
      title: "Verification Code",
      dataIndex: "transfer_ref",
      key: "verification_code",
    },
    {
      title: "Verify Status",
      dataIndex: "status",
      key: "verify_status",
    },
    {
      title: "Date",
      key: "date",
      render: (row) => {
        const year = row.date.substring(0, 4)
        const mouth = row.date.substring(4, 6)
        const day = row.date.substring(6, 8)
        return (
          <span>
            {year}-{mouth}-{day}
          </span>
        )
      }
    },
    {
      title: "Action",
      key: "action",
      render: (row) => (
        <Space size="middle">
          <Button
            icon={<EyeStyle />}
            onClick={() => handleDetail(row)}
          ></Button>
        </Space>
      ),
    },
  ];
  const history = useHistory()
  const [data, setData] = useState([])

  const handleDetail = async (data) => {
    history.push({
      pathname: '/transaction/detail/' + data.image_name,
      state: { detail: data }
    })
  };

  useEffect(() => {
    const getData = async () => {
      let response = await apiOverview.getOverview()
      setData(JSON.parse(response.data.body))
    }
    getData()
  }, [])

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ defaultPageSize: 10 }}
    />
  );
};

export default Transaction;
