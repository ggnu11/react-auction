import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { currentLanguage } from '../../recoil/layout';
import { Button } from 'antd';

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useRecoilState(currentLanguage);

  const handleClickTranslate = () => {
    const nextLanguage = language === 'en' ? 'kr' : 'en';
    setLanguage(nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Button type="primary" shape="circle" onClick={handleClickTranslate}>
      {language.toUpperCase()}
    </Button>
  );
};

export default TranslateButton;
