import Tabs, { TabsProps } from 'antd/es/tabs';
import ExchangeChart from './chart/ExchangeChart';
import ExchangeTable from './table/ExchangeTable';
import { useTranslation } from 'react-i18next';

const ExchangeResult = () => {
  const { t } = useTranslation();

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('table'),
      children: <ExchangeTable />,
    },
    {
      key: '2',
      label: t('chart'),
      children: <ExchangeChart />,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
export default ExchangeResult;
