import { fieldsValueProps } from '@/types/exchange';
import ExchangeFilter from '@components/exchange/filter/ExchangeFilter';
import ExchangeResult from '@components/exchange/result/ExchangeResult';
import Form from 'antd/es/form';

const Exchange = () => {
  const [form] = Form.useForm();
  const onFinish = (fieldsValue: fieldsValueProps) => {
    console.log('■■  fieldsValue ■■ :', fieldsValue);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <ExchangeFilter />
      <ExchangeResult />
    </Form>
  );
};

export default Exchange;
