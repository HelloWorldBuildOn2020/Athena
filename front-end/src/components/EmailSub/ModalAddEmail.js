import React, { useState } from "react";
import { Modal, Button, Form, Input, Row, Radio } from "antd";
import { P } from "../Core/Text";
import color from "../../Config/Color";
import apiService from "../../services/apiEmailSubscription"

const ModalAddEmail = (props) => {
  const { show, handleOnAdd, setShowModalAdd } = props;
  const [form] = Form.useForm();
  const [email, setEmail] = useState('')
  const initialValues = {
    email: "",
    role: "",
  };

  const handleOnClose = () => {
    setShowModalAdd(false);
    form.resetFields();
  };

  const handleSubmit = async () => {
    let data = { "email" : email }
    await apiService.createEmail(data)
    handleOnClose()
    window.location.reload()
  }

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
            <Input onChange={(e) => setEmail(e.target.value)}/>
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
                  disabled={
                    !form.isFieldsTouched(false) ||
                    form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                  onClick={handleSubmit}
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
