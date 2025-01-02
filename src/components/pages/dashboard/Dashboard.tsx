import ExchangeRate from '@components/exchange/ExchangeRate';
import ProductList from '@components/product';
import CategoryList from '@components/product/category';
import PopularProductList from '@components/product/popular-product';
import { baseCurrencyState, targetCurrencyState } from '@store/dashboard';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const Dashboard = () => {
  const setBaseCurrency = useSetRecoilState(baseCurrencyState);
  const setTargetCurrency = useSetRecoilState(targetCurrencyState);

  useEffect(() => {
    return () => {
      setBaseCurrency('USD');
      setTargetCurrency('KRW');
    };
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <PopularProductList />
      <CategoryList />
      <div className="flex gap-3">
        <ProductList />
        <ExchangeRate />
      </div>
    </div>
  );
};

export default Dashboard;
