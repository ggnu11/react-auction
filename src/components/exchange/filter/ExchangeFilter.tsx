import { useFormContext, Controller } from 'react-hook-form';
import { Input, Button } from 'antd';
import NewController from '@components/common/NewController';
import { ExchangeFormValues } from '@/types/exchange';

const ExchangeFilter = () => {
  const { control, handleSubmit } = useFormContext<ExchangeFormValues>();

  const onSubmit = (data: ExchangeFormValues) => {
    console.log(data);
  };

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
      <h1 className="text-xl font-bold mb-4">Exchange Filter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NewController name="timespan" list={timespanList} />
          <NewController name="sort" list={sortList} />
          <Controller
            name="limit"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Limit" type="number" className="w-full" />}
          />
        </div>
        <Button type="primary" htmlType="submit" className="mt-4">
          조회
        </Button>
      </form>
    </div>
  );
};

export default ExchangeFilter;
