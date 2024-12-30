import { MenuOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import { useRecoilState } from 'recoil';
import { isOpenSideMenu } from '../../../recoil/layout';
import TranslateButton from '../../button/TranslateButton';
import LoginButton from '../../button/LoginButton';
import Title from './title';

const { Header } = Layout;
const { Search } = Input;

const NewHeader = () => {
  const [sideMenuState, setSideMenuState] = useRecoilState(isOpenSideMenu);

  const toggleSider = () => {
    setSideMenuState(!sideMenuState);
  };

  return (
    <Header className="sticky top-0 z-10 w-full flex items-center justify-between bg-white shadow-md px-4">
      <div className="flex items-center">
        <Button type="text" onClick={toggleSider} className="text-xl">
          <MenuOutlined className={`transition-transform duration-300`} />
        </Button>
      </div>
      <Title />
      <div className="flex items-center space-x-4">
        <Search placeholder="검색..." enterButton className="max-w-lg w-full" />
        <LoginButton />
        <TranslateButton />
      </div>
    </Header>
  );
};

export default NewHeader;
