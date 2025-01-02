import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import styles from '@assets/css/login.module.css';
import { LoginFormValues } from '@/types/login';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values: LoginFormValues) => {
    console.log('Success:', values);
    navigate('/main');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`${styles.bgWhite}  p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">AUCTION</h1>
        <Form name="login" initialValues={{ remember: true }} onFinish={handleLogin} className="space-y-4">
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input placeholder="Username" className="py-2 px-4 rounded-md border border-gray-300" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password placeholder="Password" className="py-2 px-4 rounded-md border border-gray-300" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
