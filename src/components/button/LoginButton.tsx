import { Button } from 'antd';
import { useNavigate } from 'react-router';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <Button
      type="primary"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLoginClick}
    >
      로그인
    </Button>
  );
};

export default LoginButton;
