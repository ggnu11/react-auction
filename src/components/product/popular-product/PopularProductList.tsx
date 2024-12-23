import { Carousel, Image } from 'antd';
import Product1 from '../../../assets/images/products/image1.jpg';
import Product2 from '../../../assets/images/products/image2.jpg';
import Product3 from '../../../assets/images/products/image3.jpg';
import Product4 from '../../../assets/images/products/image4.jpg';
import Product5 from '../../../assets/images/products/image5.jpg';
import { useTranslation } from 'react-i18next';

const PopularProductList = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, name: 'Product 1', image: Product1 },
    { id: 2, name: 'Product 2', image: Product2 },
    { id: 3, name: 'Product 3', image: Product3 },
    { id: 4, name: 'Product 4', image: Product4 },
    { id: 5, name: 'Product 5', image: Product5 },
  ];

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
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
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="h-[180px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  preview={{ getContainer: '#root' }}
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-center mt-2 font-semibold">{product.name}</h3>
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
};

export default PopularProductList;
