import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleClickTranslate = () => {
    if (i18n.language === 'kr') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('kr');
    }
  };
  return (
    <Button type="primary" shape="circle" onClick={handleClickTranslate}>
      {currentLanguage.toUpperCase()}
    </Button>
  );
};

export default TranslateButton;
