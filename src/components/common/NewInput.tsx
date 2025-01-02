import { NewControllerProps } from '@/types/common';
import Input from 'antd/es/input';
import { Controller, useFormContext } from 'react-hook-form';

const NewInput = ({ name }: NewControllerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input {...field} placeholder="Limit" type="number" className="w-full" />}
    />
  );
};

export default NewInput;
