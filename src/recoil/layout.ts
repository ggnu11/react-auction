import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 사이드메뉴 상태 관리
export const isOpenSideMenu = atom<boolean>({
  key: 'isOpenSideMenu',
  default: false,
});

// 다국어 상태 관리
export const currentLanguage = atom<string>({
  key: 'currentLanguage',
  default: 'kr',
  effects_UNSTABLE: [persistAtom],
});
