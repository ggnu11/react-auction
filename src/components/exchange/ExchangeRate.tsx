import { get } from 'lodash-es';
import useExchangeRate from '../../hooks/exchange/useExchangeRate';
import { Card, Spin } from 'antd';

const ExchangeRate = () => {
  const { data: exchangeRate, isLoading } = useExchangeRate();
  const currentTime = new Date().toLocaleString();
  const krwRate = get(exchangeRate, 'conversion_rates.KRW', 0);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <Card title="Exchange Rate" className="shadow-lg rounded-lg h-[500px]">
        <p>Current Time: {currentTime}</p>
        <p>USD to KRW: {krwRate}</p>
      </Card>
    </div>
  );
};

export default ExchangeRate;
