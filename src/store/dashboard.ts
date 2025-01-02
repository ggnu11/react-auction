import { atom } from 'recoil';

export const baseCurrencyState = atom<string>({
  key: 'baseCurrencyState',
  default: 'USD',
});

export const targetCurrencyState = atom<string>({
  key: 'targetCurrencyState',
  default: 'KRW',
});
