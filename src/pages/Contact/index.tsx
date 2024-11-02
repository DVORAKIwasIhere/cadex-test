import { Button, Form, Input } from "antd";
import {
  StyledContactForm,
  StyledContactFormBox,
  StyledContactFormHeader,
} from "./styles";
import { useNavigate } from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const Contact = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {navigate(`/response?name=${data.name}`)})
      .catch((err) => console.error(err));
  };

  return (
    <>
      <StyledContactForm>
        <StyledContactFormHeader>Only CTA on the page</StyledContactFormHeader>
        <StyledContactFormBox>
          <Form
            style={{ minWidth: 300, maxWidth: 600 }}
            validateMessages={validateMessages}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="Your name"
              name="name"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Enter your message"
              name="message"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </StyledContactFormBox>
      </StyledContactForm>
    </>
  );
};

export default Contact;
