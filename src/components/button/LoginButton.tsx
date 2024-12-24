import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const LoginButton = () => {
  const { t } = useTranslation();

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
      {t('login')}
    </Button>
  );
};

export default LoginButton;
