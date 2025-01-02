import { NewControllerProps } from '@/types/common';
import DatePicker from 'antd/es/date-picker';
import { Controller, useFormContext } from 'react-hook-form';
import { isValid, parseISO } from 'date-fns';

const NewDatePicker = ({ name }: NewControllerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          className="w-full"
          onChange={(dateString) => {
            if (isValid(parseISO(dateString))) {
              field.onChange(dateString);
            }
          }}
        />
      )}
    />
  );
};

export default NewDatePicker;
