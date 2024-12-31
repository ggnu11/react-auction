import { useTranslation } from 'react-i18next';
import NewCard from '@components/common/NewCard';

const CategoryList = () => {
  const { t } = useTranslation();

  const category = [
    { id: 1, name: t('category_all') },
    { id: 2, name: t('category_electronic') },
    { id: 3, name: t('category_fashion') },
    { id: 4, name: t('category_home_appliance') },
    { id: 5, name: t('category_toys') },
    { id: 6, name: t('category_other') },
  ];

  return (
    <>
      <NewCard
        title={t('category')}
        data={category}
        colSpan={{ md: 4 }}
        cardStyle="rounded-lg overflow-hidden"
        cardMetaStyle="text-center mt-2"
      />
    </>
  );
};

export default CategoryList;
