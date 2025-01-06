import { Button, DatePicker, Form, Input, Select } from 'antd';

const { Option } = Select;

const ExchangeFilter = () => {
  const timespanList = [
    { key: 'hour', value: 'Hour' },
    { key: 'day', value: 'Day' },
    { key: 'week', value: 'Week' },
    { key: 'month', value: 'Month' },
  ];

  const sortList = [
    { key: 'asc', value: 'ASC' },
    { key: 'desc', value: 'DESC' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Form.Item label="timespan">
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
          <Form.Item label="sort">
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
          <Form.Item label="from">
            <label className="block text-gray-700">From</label>
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <Form.Item label="to">
            <label className="block text-gray-700">To</label>
            <DatePicker className="w-full" />
          </Form.Item>
        </div>
        <div>
          <Form.Item label="limit">
            <label className="block text-gray-700">Limit</label>
            <Input placeholder="Limit" type="number" className="w-full" />
          </Form.Item>
        </div>
      </div>
      <Button type="primary" htmlType="submit" className="mt-4">
        조회
      </Button>
    </div>
  );
};

export default ExchangeFilter;
