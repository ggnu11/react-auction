import { HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useRecoilValue } from 'recoil';
import { isOpenSideMenu } from '../../../recoil/layout';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;

const SideMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sideMenuState = useRecoilValue(isOpenSideMenu);

  const handleMenuClick = (path: string) => {
    navigate(path);
  };
  return (
    <Sider
      className={`bg-white shadow-lg overflow-auto h-screen fixed inset-y-0 z-[5] left-0 scrollbar-thin scrollbar-gutter-stable transition-transform duration-300 ${
        sideMenuState ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="text-xl font-bold text-center">Logo</div>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} className="mt-14">
        <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => handleMenuClick('/main')}>
          {t('home')}
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />} onClick={() => handleMenuClick('/profile')}>
          {t('auction')}
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />} onClick={() => handleMenuClick('/settings')}>
          {t('support')}
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
