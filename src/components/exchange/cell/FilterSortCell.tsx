import { Form, Select } from 'antd';

const { Option } = Select;

const FilterSortCell = () => {
  const sortList = [
    { key: 'asc', value: 'ASC' },
    { key: 'desc', value: 'DESC' },
  ];

  return (
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
  );
};

export default FilterSortCell;
