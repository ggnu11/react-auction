import { Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const FilterTimeCell = () => {
  const { t } = useTranslation();

  const timespanList = [
    { key: 'minute', value: t('exchange_minute') },
    { key: 'hour', value: t('exchange_hour') },
    { key: 'day', value: t('exchange_day') },
    { key: 'week', value: t('exchange_week') },
    { key: 'month', value: t('exchange_month') },
    { key: 'year', value: t('exchange_year') },
  ];

  return (
    <div>
      <label className="block text-gray-700">Timespan</label>
      <Form.Item name="timespan" rules={[{ required: true, message: t('validation_require') }]}>
        <Select placeholder={`Select ${name}`} className="w-full">
          {timespanList?.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.value}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default FilterTimeCell;
