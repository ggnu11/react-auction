import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import er from './lang/en';
import kr from './lang/kr';

const resources = {
  en: { translation: er },
  kr: { translation: kr },
};

const lng = localStorage.getItem('recoil-persist')
  ? JSON.parse(localStorage.getItem('recoil-persist') as string).currentLanguage
  : 'kr';

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: {
    'en-US': ['en-US'],
    default: ['kr-KR'],
  },
  debug: true,
  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;

export const languages = ['en', 'kr'] as const;
export type languagesProps = (typeof languages)[number];
