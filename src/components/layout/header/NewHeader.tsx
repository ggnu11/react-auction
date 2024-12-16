import { MenuOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { isOpenSideMenu } from '../../../recoil/layout';
import TranslateButton from '../../button/TranslateButton';
import LoginButton from '../../button/LoginButton';

const { Header } = Layout;
const { Search } = Input;

const NewHeader = () => {
  const [sideMenuState, setSideMenuState] = useRecoilState(isOpenSideMenu);
  const [isRotated, setIsRotated] = useState(false);

  const toggleSider = () => {
    setSideMenuState(!sideMenuState);
    setIsRotated(!isRotated);
  };

  return (
    <Header className="sticky top-0 z-10 w-full flex items-center justify-between bg-white shadow-md px-4">
      <div className="flex items-center">
        <Button type="text" onClick={toggleSider} className="text-xl">
          <MenuOutlined className={`transition-transform duration-300 ${isRotated ? 'rotate-90' : ''}`} />
        </Button>
      </div>
      <div className="flex-1 flex justify-center">
        <Search placeholder="검색..." enterButton className="max-w-lg w-full" />
      </div>
      <div className="flex items-center space-x-4">
        <LoginButton />
        <TranslateButton />
      </div>
    </Header>
  );
};

export default NewHeader;
