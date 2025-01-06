import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const ExchangeFilter = () => {
  const { t } = useTranslation();

  const timespanList = [
    { key: 'minute', value: t('exchange_minute') },
    { key: 'hour', value: t('exchange_hour') },
    { key: 'day', value: t('exchange_day') },
    { key: 'week', value: t('exchange_week') },
    { key: 'month', value: t('exchange_month') },
    { key: 'year', value: t('exchange_year') },
  ];

  const sortList = [
    { key: 'asc', value: 'ASC' },
    { key: 'desc', value: 'DESC' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Form.Item name="timespan" rules={[{ required: true, message: t('validation_require') }]}>
            <label className="block text-gray-700">Timespan</label>
            <Select placeholder={`Select ${name}`} className="w-full">
              {timespanList?.map((item) => (
                <Option key={item.key} value={item.key}>
                  {item.value}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="sort">
            <label className="block text-gray-700">Sort</label>
            <Select placeholder={`Select sort`} className="w-full">
              {sortList?.map((item) => (
                <Option key={item.key} value={item.key}>
                  {item.value}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div>
          <Form.Item name="from" rules={[{ required: true, message: t('validation_from') }]}>
            <label className="block text-gray-700">From</label>
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="to" rules={[{ required: true, message: t('validation_to') }]}>
            <label className="block text-gray-700">To</label>
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="limit">
            <label className="block text-gray-700">Limit</label>
            <Input placeholder={t('exchange_limit_placeholder')} type="number" className="w-full" />
          </Form.Item>
        </div>
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
