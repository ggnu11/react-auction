import { useQuery } from 'react-query';
import { axiosExchangeInstance } from '../../service/api';
import exchangeKey from './queryKey/exchangeKey';

const getExchangeRate = async () => {
  const { data } = await axiosExchangeInstance('v6').get(`${process.env.REACT_APP_EXCHANGE_API_KEY}/latest/USD`);
  return data;
};

export default function useExchangeRate() {
  return useQuery(exchangeKey.curExchangeRate, getExchangeRate);
}
