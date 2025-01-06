import { fieldsValueProps } from '@/types/exchange';
import ExchangeFilter from '@components/exchange/filter/ExchangeFilter';
import ExchangeResult from '@components/exchange/result/ExchangeResult';
import Form from 'antd/es/form';
import dayjs from 'dayjs';

const Exchange = () => {
  const onFinish = (fieldsValue: fieldsValueProps) => {
    const from = dayjs(fieldsValue.from).format('YYYY-MM-DD');
    const to = dayjs(fieldsValue.to).format('YYYY-MM-DD');
    const params = {
      ...fieldsValue,
      from,
      to,
    };
    console.log('■■  params ■■ :', params);
  };

  return (
    <Form onFinish={onFinish}>
      <ExchangeFilter />
      <ExchangeResult />
    </Form>
  );
};

export default Exchange;
