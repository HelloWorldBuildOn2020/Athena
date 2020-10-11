import React, { useState } from "react";
import { Button, Layout, Table, Popconfirm, Col, Row } from "antd";
import { PlusCircleFilled, DeleteFilled, EditFilled } from "@ant-design/icons";
import ModalAddEmail from "./ModalAddEmail";

const TableEmail = (props) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [values, setValues] = useState([]);

  const handleAdd = (data) => {
    setValues([
      ...values,
      {
        key: values.length + 1,
        ...data,
      },
    ]);
    setShowModalAdd(false);
  };

  const columns = [
    {
      title: "Email Subscription",
      dataIndex: "email",
      key: "email",
      editable: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      editable: true,
    },
    ,
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
            <Button icon={<DeleteFilled />}></Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const handleDelete = () => {
    setValues([]);
  };

  return (
    <>
      <Button
        className="float-right"
        style={{ margin: "5px 5px" }}
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-content-button"
        onClick={() => setShowModalAdd(true)}
      >
        Add Email
      </Button>
      <Layout.Content>
        <Table dataSource={values} columns={columns} />
      </Layout.Content>
      <ModalAddEmail
        show={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        handleOnAdd={handleAdd}
      />
    </>
  );
};

export default TableEmail;
