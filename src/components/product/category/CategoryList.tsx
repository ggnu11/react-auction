import { useTranslation } from 'react-i18next';
import { Card, Col, Row } from 'antd';
import { categoryData } from '@components/data/data';

const CategoryList = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="text-5xl font-bold mb-8 text-center">{t('categories')}</div>
      <Row gutter={[16, 16]}>
        {categoryData.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              cover={
                <div className="relative aspect-w-1 aspect-h-1">
                  <img
                    alt={category.name}
                    src={category.image}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              }
              className="rounded-lg overflow-hidden"
            >
              <Card.Meta title={category.name} className="text-center mt-2" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryList;
