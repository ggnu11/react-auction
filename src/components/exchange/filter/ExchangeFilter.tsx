import { Button, Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { FilterDateCell, FilterLimitCell, FilterSortCell, FilterTimeCell } from '../cell';

const ExchangeFilter = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FilterTimeCell />
        <FilterSortCell />
        <FilterDateCell title="From" fieldName="from" />
        <FilterDateCell title="To" fieldName="to" />
        <FilterLimitCell />
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="mt-4">
          {t('search')}
        </Button>
        <Button htmlType="reset"> {t('reset')}</Button>
      </Form.Item>
    </div>
  );
};

export default ExchangeFilter;
