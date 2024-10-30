import { MenuOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import { useRecoilState } from 'recoil';
import { isOpenSideMenu } from '../../../recoil/layout';

const { Header } = Layout;
const { Search } = Input;

const NewHeader = () => {
  const [sideMenuState, setSideMenuState] = useRecoilState(isOpenSideMenu);

  const toggleSider = () => {
    setSideMenuState(!sideMenuState);
  };

  return (
    <>
      <Header className="sticky top-0 z-10 w-full flex items-center justify-between bg-white shadow-md px-4">
        <Button type="text" icon={<MenuOutlined />} onClick={toggleSider} className="text-xl" />
        <Search placeholder="검색..." enterButton className="max-w-lg w-full mx-4" />
      </Header>
    </>
  );
};

export default NewHeader;
