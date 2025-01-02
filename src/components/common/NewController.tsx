import Select from 'antd/es/select';
import { Controller, useFormContext } from 'react-hook-form';

interface ListItem {
  key: string;
  value: string;
}

interface NewControllerProps {
  name: string;
  list: ListItem[];
}

const { Option } = Select;

const NewController = ({ name, list }: NewControllerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} placeholder={`Select ${name}`} className="w-full">
          {list.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.value}
            </Option>
          ))}
        </Select>
      )}
    />
  );
};
export default NewController;
