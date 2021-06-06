import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    passToSever()
  };

  const passToSever = () => {
    axios.get('http://localhost:8080/goods')
    .then(function (response: any) {
      // 处理成功情况
      console.log(response);
    })
    .catch(function (error: any) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          login
        </Button>
      </Form.Item>
    </Form>
  );
};