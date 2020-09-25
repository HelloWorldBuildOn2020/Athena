import React, { useState } from "react";
import { Button, Layout, Table, Popconfirm, Col, Row } from "antd";
import { PlusCircleFilled, DeleteFilled, EditFilled } from "@ant-design/icons";
import ModalAddProduct from "./ModalAddProduct";
import ModalEditProduct from "./ModalEditProducts";

const TableProducts = (props) => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
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
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
      editable: true,
    },
    {
      title: "Product Category",
      dataIndex: "product_category",
      key: "product_category",
      editable: true,
    },
    {
      title: "Price(Baht)",
      dataIndex: "price",
      key: "price",
      editable: true,
    },
    {
      title: "Tutor",
      dataIndex: "tutor",
      key: "tutor",
      editable: true,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <>
          <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
            <Button icon={<DeleteFilled />}></Button>
          </Popconfirm>
          <Button 
            icon={<EditFilled />}
            style={{ margin: "5px 5px" }} 
            onClick={() => setShowModalEdit(true)}>
          </Button>
        </>
      ),
    },
  ];

  const handleDelete = () => {
    setValues([]);
  };

  return (
    <>
      <Button className="float-right"
        style={{ margin: "5px 5px" }} 
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-content-button"
        onClick={() => setShowModalAdd(true)}
      >
        Add
      </Button>
      <Layout.Content>
        <Table dataSource={values} columns={columns} />
      </Layout.Content>
      <ModalAddProduct
        show={showModalAdd}
        setShowModalAdd={setShowModalAdd}
        handleOnAdd={handleAdd}
      />
      <ModalEditProduct
        show={showModalEdit}
        setShowModalEdit={setShowModalEdit}
      />
    </>
  );
};

export default TableProducts;