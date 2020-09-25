import React from "react";
import { Modal, Button, Form, Input } from 'antd';

const ModalAddProduct = (props) => {
  const { show, handleOnAdd, setShowModalAdd } = props;
  const [form] = Form.useForm();
  const initialValues = {
    product_name: "",
    product_category: "",
    price: null,
    tutor: "",
  };

  const handleOnClose = () => {
    setShowModalAdd(false)
    form.resetFields();
  }

  return (
    <>
      <Modal
        title="Add Product"
        visible={show}
        onCancel={handleOnClose}
        footer={null}
      >
        <Form
          form={form}
          initialValues={initialValues}
          onFinish={handleOnAdd}
          layout="vertical"
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              { required: true, message: "Please input your product name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Category"
            name="product_category"
            rules={[
              { required: true, message: "Please input your product category!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input your price!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Tutor"
            name="tutor"
            rules={[{ required: true, message: "Please input your tutor!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
                <Button htmlType="button" onClick={handleOnClose} >
                  Cancel
                </Button>
                <Button
                  style={{ margin: "5px 5px" }}
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length
                  }
                >
                  Add
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
