import { MenuOutlined } from '@ant-design/icons';
import { Button, Input, Layout } from 'antd';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { isOpenSideMenu } from '../../../recoil/layout';
import TranslateButton from '../../button/TranslateButton';

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
      <Button type="text" onClick={toggleSider} className="text-xl">
        <MenuOutlined className={`transition-transform duration-300 ${isRotated ? 'rotate-90' : ''}`} />
      </Button>
      <Search placeholder="검색..." enterButton className="max-w-lg w-full mx-4" />
      <TranslateButton />
    </Header>
  );
};

export default NewHeader;
