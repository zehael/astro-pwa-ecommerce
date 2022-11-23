import { Form, Input, Checkbox, Button } from "antd";
import React from "react";
import { authUser } from "../../lib/api";
import { isAuth, token } from "../../store/authStore";

const LoginForm = () => {
  const onFinish = async (values: any) => {
    try {
      const resp = await authUser(values);
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
    <div>
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
          label="Username / Email"
          name="identifier"
          rules={[{ required: true, message: "Is required" }]}
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
            Submit
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <span>
            Don't have an account yet? Please{" "}
            <a href="/auth/register">register</a>!
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
