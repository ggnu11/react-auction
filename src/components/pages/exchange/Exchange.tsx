import ExchangeFilter from '@components/exchange/filter/ExchangeFilter';
import ExchangeResult from '@components/exchange/result/ExchangeResult';
import Form from 'antd/es/form';

const Exchange = () => {
  return (
    <Form>
      <div>
        <ExchangeFilter />
        <ExchangeResult />
      </div>
    </Form>
  );
};

export default Exchange;
