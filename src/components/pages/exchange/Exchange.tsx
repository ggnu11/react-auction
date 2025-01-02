import ExchangeFilter from '@components/exchange/filter/ExchangeFilter';
import ExchangeResult from '@components/exchange/result/ExchangeResult';
import { dateToString } from '@service/date';
import { FormProvider, useForm } from 'react-hook-form';

const Exchange = () => {
  const methods = useForm({
    defaultValues: {
      timespan: 'hour',
      sort: 'asc',
      limit: 10,
      startDate: dateToString(new Date()),
      endDate: dateToString(new Date()),
    },
  });

  return (
    <FormProvider {...methods}>
      <div>
        <ExchangeFilter />
        <ExchangeResult />
      </div>
    </FormProvider>
  );
};

export default Exchange;
