import React from "react";
import { Modal, Button, Form, Input, Row, Radio } from "antd";
import { P } from "../Core/Text";
import color from "../../Config/Color";

const ModalAddEmail = (props) => {
  const { show, handleOnAdd, setShowModalAdd } = props;
  const [form] = Form.useForm();
  const initialValues = {
    email: "",
    role: "",
  };

  const handleOnClose = () => {
    setShowModalAdd(false);
    form.resetFields();
  };

  return (
    <>
      <Modal
        title="Add Email Subscription"
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
            label="Email Subscription"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email subscription!",
              },
              { type: "email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please input your email subscription!",
              },
            ]}
          >
            <Row>
              <Radio defaultChecked value="Disputes">
                Disputes:
              </Radio>
              <P color={color.description}>
                Dispute notifications and the resolution process.
              </P>
            </Row>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
                <Button htmlType="button" onClick={handleOnClose}>
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

export default ModalAddEmail;
