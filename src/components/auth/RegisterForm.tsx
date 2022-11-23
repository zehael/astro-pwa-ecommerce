import { Form, Input, Button } from "antd";
import React from "react";
import { registerUser } from "../../lib/api";
import { token, isAuth } from "../../store/authStore";

const RegisterForm = () => {
  const onFinish = async (values: any) => {
    try {
      const resp = await registerUser(values);
      token.set(String(resp?.jwt));
      isAuth.set(true);
      window.location.href = '/';
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <span>Already have an account? You can <a href='/auth/login'>login</a>.</span>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
