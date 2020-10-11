import React from "react";
import { Modal, Button, Form, Input, Checkbox, Row } from "antd";
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
              { required: true, message: "Please select at least one role!" },
            ]}
          >
            <Checkbox.Group>
              <Row>
                <Checkbox value="Disputes, ">Disputes</Checkbox>
              </Row>
              <Row>
                <P color={color.description}>
                  Dispute notifications and the resolution process.
                </P>
              </Row>
              <Row>
                <Checkbox value="Links, ">Links</Checkbox>
                <br />
              </Row>
              <Row>
                <P color={color.description}>
                  Notification when a charge is paid successfully via Links. The
                  same email also be sent to the money transfer.
                </P>
              </Row>
            </Checkbox.Group>
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
