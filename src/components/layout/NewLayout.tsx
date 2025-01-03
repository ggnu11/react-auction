import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Outlet } from 'react-router';
import NewHeader from './header/NewHeader';
import SideMenu from './sider/SideMenu';

const { Content } = Layout;

const NewLayout = () => {
  return (
    <Layout hasSider>
      <SideMenu />
      <Layout className="min-h-screen flex flex-col">
        <NewHeader />
        <Content className="px-12 pt-12 flex-1 overflow-y-auto max-h-[calc(100vh-62px)]">
          <Outlet />
          <Footer className="text-center text-base h-[40px] flex items-center justify-center">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NewLayout;
