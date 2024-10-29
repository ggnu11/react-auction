import { atom } from 'recoil';

export const test = atom<any>({
  key: 'test',
  default: 'test',
});
