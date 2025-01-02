import NewTab from '@components/common/NewTabs';
import ExchangeChart from './chart/ExchangeChart';
import ExchangeTable from './table/ExchangeTable';
import { useTranslation } from 'react-i18next';

const ExchangeResult = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      title: t('table'),
      children: <ExchangeTable />,
    },
    {
      title: t('chart'),
      children: <ExchangeChart />,
    },
  ];

  return (
    <div>
      <NewTab list={tabs} />
    </div>
  );
};
export default ExchangeResult;
