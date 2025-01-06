import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const FilterLimitCell = () => {
  const { t } = useTranslation();

  return (
    <div>
      <label className="block text-gray-700">Limit</label>
      <Form.Item name="limit">
        <Input placeholder={t('exchange_limit_placeholder')} type="number" className="w-full" />
      </Form.Item>
    </div>
  );
};
export default FilterLimitCell;
