import { useState } from 'react';
import { get } from 'lodash-es';
import useExchangeRate from '../../hooks/exchange/useExchangeRate';
import { Card, Spin, Select, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const { Option } = Select;

const ExchangeRate = () => {
  const { t } = useTranslation();
  const { data: exchangeRate, isLoading } = useExchangeRate();

  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('KRW');
  const [baseAmount, setBaseAmount] = useState(1);
  const [targetAmount, setTargetAmount] = useState(() => calculateTargetAmount(1, 'USD', 'KRW'));

  function calculateTargetAmount(amount: number, base: string, target: string): number {
    const baseRate = get(exchangeRate, `conversion_rates.${base}`, 1);
    const targetRate = get(exchangeRate, `conversion_rates.${target}`, 1);
    return parseFloat(((targetRate / baseRate) * amount).toFixed(4));
  }

  const handleBaseCurrencyChange = (value: string) => {
    setBaseCurrency(value);
    setTargetAmount(calculateTargetAmount(baseAmount, value, targetCurrency));
  };

  const handleTargetCurrencyChange = (value: string) => {
    setTargetCurrency(value);
    setTargetAmount(calculateTargetAmount(baseAmount, baseCurrency, value));
  };

  const handleBaseAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBaseAmount(value);
    setTargetAmount(calculateTargetAmount(value, baseCurrency, targetCurrency));
  };

  const handleTargetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTargetAmount(value);
    setBaseAmount(calculateTargetAmount(value, targetCurrency, baseCurrency));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Card title={t('exchange_rate')} className="shadow-lg rounded-lg w-[500px] text-center">
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue="USD" style={{ width: 120 }} onChange={handleBaseCurrencyChange}>
          {Object.keys(exchangeRate.conversion_rates).map((currency) => (
            <Option key={currency} value={currency} title={currency}>
              {currency}
            </Option>
          ))}
        </Select>
        <Input type="number" value={baseAmount} min={0} onChange={handleBaseAmountChange} style={{ width: 120 }} />
      </div>
      <div className="flex justify-between items-center mb-4">
        <Select defaultValue="KRW" style={{ width: 120 }} onChange={handleTargetCurrencyChange}>
          {Object.keys(exchangeRate.conversion_rates).map((currency) => (
            <Option key={currency} value={currency} title={currency}>
              {currency}
            </Option>
          ))}
        </Select>
        <Input type="number" value={targetAmount} min={0} onChange={handleTargetAmountChange} style={{ width: 120 }} />
      </div>
    </Card>
  );
};

export default ExchangeRate;
