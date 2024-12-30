import { Carousel, Image } from 'antd';

import { useTranslation } from 'react-i18next';
import { popularProductData } from '../../data/data';

const PopularProductList = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[200px] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-5xl font-bold mb-4 text-center">{t('popular_product')}</div>
      <Image.PreviewGroup>
        <Carousel
          dots={false}
          arrows={true}
          infinite={true}
          slidesToShow={3}
          autoplay
          className="rounded-lg overflow-hidden"
        >
          {popularProductData.map((product) => (
            <div key={product.id} className="p-2">
              <div className="h-[100px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  preview={{ getContainer: '#root' }}
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
};

export default PopularProductList;
