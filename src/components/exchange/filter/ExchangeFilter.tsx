import { ExchangeFormValues } from '@/types/exchange';
import NewDatePicker from '@components/common/NewDatePicker';
import NewInput from '@components/common/NewInput';
import NewSelect from '@components/common/NewSelect';
import { Button } from 'antd';
import { useFormContext } from 'react-hook-form';

const ExchangeFilter = () => {
  const { handleSubmit } = useFormContext<ExchangeFormValues>();

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700">Timespan</label>
            <NewSelect name="timespan" list={timespanList} />
          </div>
          <div>
            <label className="block text-gray-700">Sort</label>
            <NewSelect name="sort" list={sortList} />
          </div>
          <div>
            <label className="block text-gray-700">From</label>
            <NewDatePicker name="from" />
          </div>
          <div>
            <label className="block text-gray-700">To</label>
            <NewDatePicker name="to" />
          </div>
          <div>
            <label className="block text-gray-700">Limit</label>
            <NewInput name="limit" />
          </div>
        </div>
        <Button type="primary" htmlType="submit" className="mt-4">
          조회
        </Button>
      </form>
    </div>
  );
};

export default ExchangeFilter;
