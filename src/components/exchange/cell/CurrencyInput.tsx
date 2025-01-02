import { CurrencyInputProps } from '@/types/exchange';
import Input from 'antd/es/input';
import Select from 'antd/es/select';

const { Option } = Select;

const CurrencyInput = ({ currency, amount, onCurrencyChange, onAmountChange, exchangeRate }: CurrencyInputProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Select value={currency} style={{ width: 120 }} onChange={(value: string) => onCurrencyChange(value)}>
        {Object.keys(exchangeRate.conversion_rates).map((currency) => (
          <Option key={currency} value={currency} title={currency}>
            {currency}
          </Option>
        ))}
      </Select>
      <Input
        type="number"
        value={amount}
        min={0}
        onChange={(e) => onAmountChange(e.target.value)}
        style={{ width: 120 }}
      />
    </div>
  );
};

export default CurrencyInput;
