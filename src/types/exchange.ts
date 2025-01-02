export interface ExchangeFormValues {
  timespan: string;
  from: string;
  to: string;
  sort: string;
  limit: number;
}

export interface CurrencyInputProps {
  currency: string;
  amount: number;
  onCurrencyChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  exchangeRate: { conversion_rates: { [key: string]: number } };
}
