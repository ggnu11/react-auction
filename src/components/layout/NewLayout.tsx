import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Outlet } from 'react-router';
import NewHeader from './header/NewHeader';
import SideMenu from './sider/SideMenu';
import { useTranslation } from 'react-i18next';

const { Content } = Layout;

const NewLayout = () => {
  const { t } = useTranslation('translation');

  return (
    <Layout hasSider>
      <SideMenu />
      <Layout className="min-h-screen flex flex-col">
        <NewHeader />
        <Content className="px-12 pt-12 flex-1 overflow-y-auto max-h-[calc(100vh-65px)]">
          <div className="bg-white h-full">
            {t('title')}
            <Outlet />
          </div>
          <Footer className="text-center text-base h-[40px] flex items-center justify-center">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewLayout;
