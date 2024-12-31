import { BankOutlined, HomeOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { isOpenSideMenu } from '../../../store/layout';
import { useRecoilState } from 'recoil';

const { Sider } = Layout;

const SideMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [sideMenuState, setSideMenuState] = useRecoilState(isOpenSideMenu);

  const handleMenuClick = (path: string) => {
    navigate(path);
    setSideMenuState(false);
  };

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: t('home'),
      onClick: () => handleMenuClick('/main'),
    },
    {
      key: '2',
      icon: <BankOutlined />,
      label: t('auction'),
      onClick: () => handleMenuClick('/auction'),
    },
    {
      key: '3',
      icon: <TeamOutlined />,
      label: t('support'),
      onClick: () => handleMenuClick('/support'),
    },
  ];

  return (
    <Sider
      className={`bg-white shadow-lg overflow-auto h-screen fixed inset-y-0 z-[5] left-0 scrollbar-thin scrollbar-gutter-stable transition-transform duration-300 ${
        sideMenuState ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="text-xl font-bold text-center">Logo</div>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} className="mt-14" items={menuItems} />
    </Sider>
  );
};

export default SideMenu;
