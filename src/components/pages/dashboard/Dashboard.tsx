import PopularProductList from '../../product/popular-product';
import ProductList from '../../product';
import ExchangeRate from '../../exchange/ExchangeRate';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3">
      <PopularProductList />
      <div className="flex gap-3">
        <ProductList />
        <ExchangeRate />
      </div>
    </div>
  );
};

export default Dashboard;
