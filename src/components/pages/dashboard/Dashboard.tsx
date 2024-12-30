import ExchangeRate from '@components/exchange/ExchangeRate';
import ProductList from '@components/product';
import CategoryList from '@components/product/category';
import PopularProductList from '@components/product/popular-product';

const Dashboard = () => {
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
