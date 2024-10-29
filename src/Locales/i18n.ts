import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import er from './lang/en';
import kr from './lang/kr';

const resources = {
  en: { translation: er },
  kr: { translation: kr },
};

const userLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || userLanguage || 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const languages = ['en', 'kr'] as const;
export type Languages = (typeof languages)[number];
