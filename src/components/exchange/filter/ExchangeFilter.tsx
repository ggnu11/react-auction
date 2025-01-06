import { Button, DatePicker, Form, Input, Select } from 'antd';
import dayjs from 'dayjs';
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
        <div>
          <label className="block text-gray-700">Sort</label>
          <Form.Item name="sort">
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
          <label className="block text-gray-700">From</label>
          <Form.Item name="from" rules={[{ required: true, message: t('validation_from') }]}>
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <label className="block text-gray-700">To</label>
          <Form.Item
            name="to"
            rules={[
              { required: true, message: t('validation_to') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const from = getFieldValue('from');
                  if (!value || !from || dayjs(value).isAfter(dayjs(from))) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('validation_to_before_from')));
                },
              }),
            ]}
          >
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <label className="block text-gray-700">Limit</label>
          <Form.Item name="limit">
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
