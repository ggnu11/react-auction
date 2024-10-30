import { atom } from 'recoil';

export const isOpenSideMenu = atom<boolean>({
  key: 'isOpenSideMenu',
  default: false,
});
