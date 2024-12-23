import { Card, Col, Row } from 'antd';
import { popularProductData } from '../data/data';
import { useTranslation } from 'react-i18next';

const ProductList = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="text-5xl font-bold mb-4 text-center">{t('product_list')}</div>
      <Row gutter={[16, 16]}>
        {popularProductData.map((product) => (
          <Col key={product.id} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} className="h-48 object-cover" />}
              className="rounded-lg overflow-hidden"
            >
              <Card.Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
