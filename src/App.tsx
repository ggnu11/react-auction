import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './App.css';
import './assets/css/fonts.css';
import { languages, Languages } from './Locales/i18n';
import GlobalStyle from './styles/globalStyle';

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  const siteName = process.env.REACT_APP_NAME;

  return (
    <>
      <Helmet>
        <title>{`${siteName}`}</title>
      </Helmet>
      <GlobalStyle />
      <div className="text-3xl bg-blue-500">
        <p>{t('title')}</p>
        <p>{t('description')}</p>
        {languages.map((lang) => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`language_${lang}`)}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
