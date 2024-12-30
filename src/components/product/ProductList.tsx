import { popularProductData } from '../data/data';
import { useTranslation } from 'react-i18next';
import NewCard from '../common/NewCard';

const ProductList = () => {
  const { t } = useTranslation();

  return (
    <>
      <NewCard
        title={t('product_list')}
        data={popularProductData}
        colSpan={{ md: 8, lg: 4 }}
        cardStyle="rounded-lg overflow-hidden"
        imgStyle="w-full h-full object-cover"
      />
    </>
  );
};

export default ProductList;
