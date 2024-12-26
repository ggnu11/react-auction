import { Card, Spin } from 'antd';
import { get } from 'lodash-es';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useExchangeRate from '../../hooks/exchange/useExchangeRate';
import CurrencyInput from './cell';

const ExchangeRate = () => {
  const { t } = useTranslation();
  const { data: exchangeRate, isLoading } = useExchangeRate();

  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('KRW');
  const [baseAmount, setBaseAmount] = useState(1);
  const [targetAmount, setTargetAmount] = useState(0);

  useEffect(() => {
    setTargetAmount(calculateTargetAmount(baseAmount, baseCurrency, targetCurrency));
  }, [exchangeRate, baseAmount, baseCurrency, targetCurrency]);

  // 환율 계산
  function calculateTargetAmount(amount: number, base: string, target: string): number {
    const baseRate = get(exchangeRate, `conversion_rates.${base}`, 1);
    const targetRate = get(exchangeRate, `conversion_rates.${target}`, 1);
    return parseFloat(((targetRate / baseRate) * amount).toFixed(4));
  }

  // 통화 변경 시
  const handleCurrencyChange = (type: 'base' | 'target', value: string) => {
    if (type === 'base') {
      setBaseCurrency(value);
    } else {
      setTargetCurrency(value);
    }
  };

  // 금액 변경 시
  const handleAmountChange = (type: 'base' | 'target', value: string) => {
    const amount = parseFloat(value);
    if (type === 'base') {
      setBaseAmount(amount);
    } else {
      setTargetAmount(amount);
      setBaseAmount(calculateTargetAmount(amount, targetCurrency, baseCurrency));
    }
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
      <CurrencyInput
        currency={baseCurrency}
        amount={baseAmount}
        onCurrencyChange={(value: string) => handleCurrencyChange('base', value)}
        onAmountChange={(value: string) => handleAmountChange('base', value)}
        exchangeRate={exchangeRate}
      />
      <CurrencyInput
        currency={targetCurrency}
        amount={targetAmount}
        onCurrencyChange={(value: string) => handleCurrencyChange('target', value)}
        onAmountChange={(value: string) => handleAmountChange('target', value)}
        exchangeRate={exchangeRate}
      />
    </Card>
  );
};

export default ExchangeRate;
