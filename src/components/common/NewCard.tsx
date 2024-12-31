import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Row from 'antd/es/row';

interface Item {
  id: number;
  name: string;
  image?: string;
  description?: string;
}

interface NewCardProps {
  title: string;
  data: Item[];
  colSpan?: { [key: string]: number };
  cardStyle?: string;
  imgStyle?: string;
  cardMetaStyle?: string;
}

// xs: <576px, sm: ≥576px, md: ≥768px, lg: ≥992px, xl: ≥1200px, xxl: ≥1600px
const NewCard = ({ title, data, colSpan, cardStyle, imgStyle, cardMetaStyle }: NewCardProps) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="text-5xl font-bold mb-4 text-center">{title}</div>
      <Row gutter={[16, 16]}>
        {data?.map((item) => (
          <Col key={item.id} {...colSpan}>
            <Card
              hoverable
              className={cardStyle}
              cover={item.image && <img alt={item.name} src={item.image} className={imgStyle} />}
            >
              <Card.Meta title={item.name} description={item.description} className={cardMetaStyle} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewCard;
