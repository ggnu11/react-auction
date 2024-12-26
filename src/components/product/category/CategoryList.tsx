import { useTranslation } from 'react-i18next';

const CategoryList = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[200px] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-5xl font-bold mb-4 text-center">{t('Category')}</div>
    </div>
  );
};

export default CategoryList;
